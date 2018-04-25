import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, TextInput, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { store } from '../Store.js';
import { Actions } from 'react-native-router-flux';
import I18n from '../utils/i18n';
import Reviews from '../components/Reviews.js'

const notFoundImage = require('../images/question-mark.jpg');

export default class AlbumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){
    Keyboard.dismiss()
/*
axios.post(
    'http://review-a-record.herokuapp.com/test-token',
    {token: this.props.jwttoken}
).then((res) => {
    axios.post('',{
        user_id: res.data.userid,
        artist_name: this.props.artistname,
        album_name: this.props.albumName,
        spotify_artist_id: this.props.artistid,
        spotify_album_id: this.props.spotifyid,
        rating: this.props.rating
      },
      {headers: {token: this.props.jwttoken}}
      )
      .then((resp) => {
          console.log(this.props.albumImg)
        Actions.album({
            spotifyid: this.props.spotifyid,
            artistname: this.props.artistname,
            artistid: this.props.artistid,
            albumName: this.props.albumName,
            albumImg: this.props.albumImg
        })
      })
})
*/
  }
  render() {

    return (
      <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.imageWrap}>
              <Image style={styles.images} source={{uri: this.props.albumImg }}/>
            </View>
            <Text style={styles.resultText}>{ "AVG(RATING) from db"}</Text>
            <TextInput style={styles.inputBox}
            placeholder = "1-5"
            keyboardType = 'numeric'
              onChangeText={(rating) => this.setState({rating})}
              value={this.state.rating}
            />
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
