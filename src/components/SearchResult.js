import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
      <FlatList
        data={ store.getState().albums.items }
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
      </View>
    )
  }
}
