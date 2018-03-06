import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

 export default class SearchPage extends React.Component {

  render() {

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
