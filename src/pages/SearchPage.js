import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import { store } from '../Store.js';

 export default class SearchPage extends React.Component {


  render() {
    store.subscribe(() => this.forceUpdate());
    return (
      <View style={styles.container}>
        <SearchBar/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
