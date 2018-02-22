import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store } from '../Store.js';
const notFoundImage = require('../images/question-mark.jpg');


export default class ArtistView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

          <View style={styles.kustajapaskaa}>
            <Text>{ this.props.data }</Text>
            <Text>{ this.props.data }</Text>
            <Text>{ this.props.data }</Text>
            <Text>{ this.props.data }</Text>
            <Text>{ this.props.data }</Text>
          </View>
        );
      }
    };

    const styles = StyleSheet.create({
      kustajapaskaa: {
        flex: 1,
      }
    });