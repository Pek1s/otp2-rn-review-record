import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import { store } from '../Store.js';

 export default class SearchPage extends React.Component {


  render() {
    store.subscribe(() => this.forceUpdate());
    return (
      <View style={styles.mainContainer}>
        <SearchBar/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }

});
