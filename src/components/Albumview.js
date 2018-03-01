import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store } from '../Store.js';
const notFoundImage = require('../images/question-mark.jpg');


export default class AlbumView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
          <View style={styles.wat}>
          <Text style={styles.resultText}>{ this.props.spotifyid }</Text>
          <Text style={styles.resultText}>{ this.props.albumName }</Text>
           <Text style={styles.resultText}>{ this.props.albumImg }</Text>
          </View>
        );
      }
    };

    const styles = StyleSheet.create({
      wat: {
        flex: 1,
      },
      resultText: {
        textAlign: 'center',
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.7)',
      },
    });
