import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { store } from '../Store.js';
import Albumresult from './Albumresult';
const notFoundImage = require('../images/question-mark.jpg');


export default class ArtistView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
          <View style={styles.wat}>
          <Albumresult/>
          <Text style={styles.resultText}>{ this.props.spotifyid }</Text>
          <Text style={styles.resultText}>{ this.props.artistName }</Text>
           <Text style={styles.resultText}>{ this.props.artistImg }</Text>

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
      images: {
        borderRadius: 120,
        height: '100%',
        width: '100%',
         },
    });
