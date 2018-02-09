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

      <View>
        <ScrollView>
          <Artistresult/>
          <Albumresult/>
        </ScrollView>
      </View>
    )
  }
}
