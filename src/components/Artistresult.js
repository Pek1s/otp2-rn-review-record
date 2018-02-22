import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { store } from '../Store.js';
import { Actions } from 'react-native-router-flux';
const notFoundImage = require('../images/question-mark.jpg');


export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.toArtist = this.toArtist.bind(this);
  }

  toArtist(data) {
    Actions.artist()
  }

  render() {
    return (
      <View style={styles.artistsContainer}>
        {store.getState().artists.items && store.getState().artists.items.map( x =>
          <TouchableOpacity key={x.id} >
            <View key={x.id} style={styles.artistInnerItem}>
              <View style={styles.imageContainer}>
                <Image style={styles.artistImage}
                  source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
              </View>
              <View style={styles.artistName}>
                <Text style={styles.resultText}>{x.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
};

   const styles = StyleSheet.create({
     artistsContainer: {
       flex: 1,
       backgroundColor: '#242628',
       flexDirection: 'row',
       flexWrap: 'wrap',
       padding: 5,
    },
    artistInnerItem: {
      width: '50%',
      height: '50%',
      padding: 10,
    },
    imageContainer: {
      height: '90%'
    },
    artistImage: {
      height: '100%',
      width: 200,
    },
    artistName: {
      height:'10%',
      backgroundColor: '#c4af3a',
    },
    resultText: {
      color: 'rgb(255, 255, 255)',
      fontSize: 20,
      fontWeight:'500',
      textAlign: 'center',

    }
   });
