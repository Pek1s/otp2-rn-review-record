import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { store } from '../Store.js';
const notFoundImage = require('../images/question-mark.jpg');

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (

      <View>
        <ScrollView>
          <View>
          {store.getState().artists.items.map( x => 
            <View key={x}>
              <Image
              style={{width: 200, height: 200}}
              source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
            <Text>{x.name}</Text>
            </View>
            )}
         </View>
          <View>
          {store.getState().albums.items.map( x => 
            <View key={x}>
              <Image
              style={{width: 200, height: 200}}
              source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
            <Text>{x.name}</Text>
            </View>
          
            )}
          </View>

        </ScrollView>
      </View>



      
    )
  }
}
