import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { store } from '../Store.js';
import { Actions } from 'react-native-router-flux';
import ResponsiveImage from 'react-native-responsive-image';
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
                <Image style={styles.images}
                source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
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
       flexDirection: 'row',
       flexWrap: 'wrap',
       justifyContent: 'center',
    },
    artistInnerItem: {
      flex: 1,
      padding: 2,
      height: (Dimensions.get('window').height/3) - 12,
      width: (Dimensions.get('window').width/2) - 4,
      backgroundColor: '#242628',
    },
    images: {
      height: (Dimensions.get('window').height/3) - 12,
      width: (Dimensions.get('window').width/2) - 4,
    },

   });
