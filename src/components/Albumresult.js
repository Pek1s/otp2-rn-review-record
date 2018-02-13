import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { store } from '../Store.js';
const notFoundImage = require('../images/question-mark.jpg');


export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

          <View style={styles.kustajapaskaa}>
          {store.getState().albums.items && store.getState().albums.items.map( x =>
            <View key={x.id}>
              <Image
              style={{width: 100, height: 100}}
              source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
            <Text style={styles.resultText}>{x.name}</Text>
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
