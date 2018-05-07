import React from 'react';
import axios from 'axios'
import { Button, StyleSheet, Text, TextInput, View, Image, Dimensions, TouchableOpacity, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import I18n from '../utils/i18n';
import Reviews from '../components/Reviews.js'
import { connect } from "react-redux";

const notFoundImage = require('../images/question-mark.jpg');

class AlbumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('http://review-a-record.herokuapp.com/reviews/album-rating/' + this.props.spotifyid)
      .then((res) => {
        this.setState({ ratingAverage: res.data.ratingAverage });
      })
      .catch(err => console.error(err));
  }

  onSubmit() {
    Keyboard.dismiss();
    let properRating = this.state.rating;
    if (properRating > 5) {
      properRating = 5;
    }
    if (properRating < 1) {
      properRating = 1;
    }
    axios.post('http://review-a-record.herokuapp.com/secure/reviews/rate-album/',
      {
        token: this.props.token,
        user_id: this.props.userid,
        spotify_album_id: this.props.spotifyid,
        rating: properRating,
      })
      .then((res) => {
        axios.get('http://review-a-record.herokuapp.com/reviews/album-rating/' + this.props.spotifyid)
        .then((res) => {
          this.setState({ ratingAverage: res.data.ratingAverage });
        })
        .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }

  render() {

    return (
      <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.imageWrap}>
              <Image style={styles.images} source={{uri: this.props.albumImg }}/>
            </View>
            <Text style={styles.resultText}>{ this.state.ratingAverage}</Text>
            <TextInput style={styles.inputBox}
            placeholder = "1-5"
            keyboardType = 'numeric'
              onChangeText={(rating) => this.setState({rating})}
              value={this.state.rating}
            />
            <Button style={styles.Button}
              onPress={() =>
                this.onSubmit()
              }
              title="Rate album"
              accessibilityLabel="Rate album"
            > </Button>
            <Text style={styles.resultText}>{ this.props.albumName }</Text>
            <TouchableOpacity style={styles.Button} onPress={() => Actions.review({
              spotifyid: this.props.spotifyid,
              albumName: this.props.albumName,
              artistname: this.props.artistname,
              artistid: this.props.artistid,
              albumImg: this.props.albumImg
              })}>
              <Text style={styles.buttonText}>{I18n.t('album.ReviewThisAlbum')}</Text>
            </TouchableOpacity>
          </View>
      </View>
        );
      }
    };

    function mapStateToProps(state) {
      return { userid: state.userid, token: state.jwttoken };
    }
    
    export default connect(mapStateToProps)(AlbumView);

    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      top: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#242628',
      },
      imageWrap:{
        height: (Dimensions.get('window').height/3) - 12,
        width: (Dimensions.get('window').width/2) - 4,
        borderWidth: 4,
        marginBottom: 10,
        borderColor: '#fff'
      },
      images: {
        height: '100%',
        width: '100%'
      },
      Button: {
        width: '80%',
        height: '15%',
        width: 120,
        margin: 5,
        paddingTop: 5,
        backgroundColor: '#35912e',
        borderRadius: 25,
      },
      buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
      },
      bottom: {
        flex: 1,
        backgroundColor: '#242628',
      },
      resultText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22,
        color: 'rgba(255, 255, 255, 0.7)',
      },
      inputBox: {
        backgroundColor: '#3f423f',
        width: '75%',
        height: 40,
        margin: 5,
        paddingHorizontal: 30,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 25,
        color: 'rgba(255, 255, 255, 0.7)',
      },
    });
