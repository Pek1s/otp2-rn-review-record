import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';

class Home extends React.Component {


  render() {
    return (
      <View>
        <SearchBar/>
      </View>
    );
  }
};

const styles = StyleSheet.create({

});

export default Home;
