import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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

          <View style={styles.kustajapaskaa}>
          {store.getState().albums.items && store.getState().albums.items.map( x =>
            <View key={x.id}>
              <TouchableOpacity key={x.id} onPress={console.log("ads")}>
              <Image
              style={{width: 100, height: 100}}
              source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
            <Text style={styles.resultText}>{x.name}</Text>
            </TouchableOpacity>
            </View>
            )}
          </View>
        );
      }
    };

    const styles = StyleSheet.create({
      kustajapaskaa: {
        flex: 1,
      }
    });
