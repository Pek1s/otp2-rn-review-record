import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { store } from '../Store.js';
import AlbumView from  '../components/Albumview';
import { getSeveralAlbums } from '../Spotify';
const notFoundImage = require('../images/question-mark.jpg');


export default class ArtistView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.resultText}>{ this.props.artistName }</Text>
            <View style={styles.imageWrap}>
              <Image style={styles.images} source={{uri: this.props.artistImg }}/>
            </View>
            <Text style={styles.resultText}>{ this.props.spotifyid }</Text>
          </View>
      </View>


/*
          <View style={styles.wat}>
          <Albumresult/>
          <Text style={styles.resultText}>{ this.props.spotifyid }</Text>
          <Text style={styles.resultText}>{ this.props.artistName }</Text>
           <Text style={styles.resultText}>{ this.props.artistImg }</Text>
*/

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

      resultText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22,
        color: 'rgba(255, 255, 255, 0.7)',
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
    });
