import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { store } from '../Store.js';
import { Actions } from 'react-native-router-flux';

const notFoundImage = require('../images/question-mark.jpg');


export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.toAlbum = this.toAlbum.bind(this);
  }

  toAlbum(data) {
    Actions.artist({data})
  }

  render() {

    return (
      <View style={styles.albumsContainer}>
      {store.getState().albums.items && store.getState().albums.items.map( x =>
          <TouchableOpacity key={x.id} onPress={console.log("ads")}>
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
    );
  }
};

    const styles = StyleSheet.create({
      albumsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
     },
     albumInnerItem: {
       flex: 1,
       padding: 5,
       paddingBottom: 20,
       height: (Dimensions.get('window').height/3) - 12,
       width: (Dimensions.get('window').width/2) - 4,
       backgroundColor: '#242628',
       justifyContent: 'center',
     },
     albumName: {
       backgroundColor: '#242628',
     },
     resultText: {
       textAlign: 'center',
       fontWeight: '500',
       color: 'rgba(255, 255, 255, 0.7)',
     },
     images: {
       height: '100%',
       width: '100%'
     },

    });
