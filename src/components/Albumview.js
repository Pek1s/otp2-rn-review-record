import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { store } from '../Store.js';
const notFoundImage = require('../images/question-mark.jpg');


export default class AlbumView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

          <View style={styles.kustajapaskaa}>
            <Text>{this.props.data}</Text>
          </View>
        );
      }
    };

    const styles = StyleSheet.create({
      kustajapaskaa: {
        flex: 1,
      }
    });