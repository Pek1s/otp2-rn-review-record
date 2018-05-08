import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { store } from '../Store.js';
import axios from 'axios';
import AlbumView from  '../components/Albumview';
import { getArtistAlbums } from '../Spotify';
const notFoundImage = require('../images/question-mark.jpg');
const albums = getArtistAlbums(this.props.spotifyid);

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
        </View>
      <View style={styles.albumsContainer}>
      {this.props.albums && this.props.albums.map( x =>
          <TouchableOpacity key={x.id} onPress={ () => Actions.album({
            spotifyid: x.id,
            artistname: x.artists[0].name,
            artistid: x.artists[0].id,
            albumName: x.name,
            albumImg: imgUrl(x.images) })} >
            <View key={x.id} style={styles.albumInnerItem}>
              <Image style={styles.images}
                source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
                <View style={styles.albumName}>
                  <Text style={styles.resultText}>{x.name}</Text>
                </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
      </View>
    );
  }

};

/*
          <View style={styles.wat}>
          <Albumresult/>
          <Text style={styles.resultText}>{ this.props.spotifyid }</Text>
          <Text style={styles.resultText}>{ this.props.artistName }</Text>
           <Text style={styles.resultText}>{ this.props.artistImg }</Text>
*/


    function mapStateToProps(state) {
      return { albums: state.albums.items };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      top: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#242628',
      albumsContainer: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: '#222222',
       },
       albumName: {
         backgroundColor: '#222222',
       },
       albumInnerItem: {
         flex: 1,
         paddingTop: 10,
         paddingBottom: 20,
         paddingLeft: 10,
         paddingRight: 10,
         height: (Dimensions.get('window').height/3) - 12,
         width: (Dimensions.get('window').width/2) - 4,
         backgroundColor: '#222222',
         justifyContent: 'center',
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
    });
