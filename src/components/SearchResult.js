import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { store } from '../Store.js';
import Albumresult from './Albumresult';
import Artistresult from './Artistresult';
const notFoundImage = require('../images/question-mark.jpg');


export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <View style={styles.resultsContainer}>
      <ScrollView>
          <Artistresult/>
          <Albumresult/>
          </ScrollView>
      </View>

    );
  }
};

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#242628',
    padding: 5,

  }
});
