import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

 export default class SearchPage extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <SearchBar/>
        <SearchResult/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
