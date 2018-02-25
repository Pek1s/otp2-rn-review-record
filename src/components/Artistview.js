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
            <Text style={styles.resultText}>{ this.props.data }</Text>
            <Text style={styles.resultText}>{ this.props.data }</Text>
            <Text style={styles.resultText}>{ this.props.data }</Text>
            <Text style={styles.resultText}>{ this.props.data }</Text>
            <Text style={styles.resultText}>{ this.props.data }</Text>
          </View>
        );
      }
    };

    const styles = StyleSheet.create({
      kustajapaskaa: {
        flex: 1,
      },
      resultText: {
        textAlign: 'center',
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.7)',
      },
    });
