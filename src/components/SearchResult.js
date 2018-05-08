import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
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
      <View style={styles.bottomWrapper}>
          <Artistresult/>
          <Albumresult/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bottomWrapper: {
    flex: 1,
    backgroundColor: '#222222',
  }
});
