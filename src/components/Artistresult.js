import React from 'react';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import { store } from '../Store.js';
const notFoundImage = require('../images/question-mark.jpg');


export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
          <View>
          {store.getState().artists.items && store.getState().artists.items.map( x =>
            <View key={x.id}>
              <Image
              style={{width: 200, height: 200}}
              source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
            <Text>{x.name}</Text>
            </View>
            )}
         </View>
       );
     }
   };
