import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { store } from '../Store.js';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    }
  }

  componentDidMount(){
    this.setState({
      artists: store.getState().artists.items
    })
  }
  render() {
    return (
      <View>
      { this.state.artists.length > 3 &&
      <FlatList
        data={ this.state.artists }
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}    
      />
    }
      </View>
      )
    }
}