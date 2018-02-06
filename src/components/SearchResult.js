import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { store } from '../Store.js';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
      <FlatList
        data={ store.getState().artists.items }
        renderItem={({item}) =>
          <View>
            <Image
              style={{width: 200, height: 200}}
              source={item.images.length > 0  && {uri: item.images[0].url}}/>
            <Text>{item.name}</Text>
          </View>
        }
        keyExtractor={item => item.id}
      />
      <FlatList
        data={ store.getState().albums.items }
        renderItem={({item}) =>
          <View>
            <Image
              style={{width: 200, height: 200}}
              source={item.images.length > 0  && {uri: item.images[0].url}}/>
            <Text>{item.name}</Text>
          </View>
        }
        keyExtractor={item => item.id}
      />
      </View>
    )
  }
}
