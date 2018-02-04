import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { store } from '../Store.js';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      albums: []
    }
  }

  componentDidMount(){
    this.setState({
      artists: store.getState().artists.items,
      albums: store.getState().albums.items
    })
  }
  render() {
    return (
      <View>
      <FlatList
        data={ this.state.artists }
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}    
      />
      <FlatList
        data={ this.state.albums }
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}    
      />
      </View>
    )
  }
}