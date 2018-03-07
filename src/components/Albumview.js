import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { store } from '../Store.js';
const notFoundImage = require('../images/question-mark.jpg');


export default class AlbumView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.imageWrap}>
              <Image style={styles.images} source={{uri: this.props.albumImg }}/>
            </View>
            <Text style={styles.resultText}>{ this.props.albumName }</Text>
          </View>

          <View style={styles.middle}></View>

          <View style={styles.bottom}>
          </View>
      </View>
        );
      }
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      top: {
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#242628',
      },
      imageWrap:{
        height: (Dimensions.get('window').height/3) - 12,
        width: (Dimensions.get('window').width/2) - 4,
        borderWidth: 4,
        marginBottom: 10,
        borderColor: '#fff'
      },
      images: {
        height: '100%',
        width: '100%'
      },
      middle: {
        height: '5%',
        backgroundColor: '#242628' ,
      },
      bottom: {
        height: '45%',
        backgroundColor: '#242628',
      },
      resultText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22,
        color: 'rgba(255, 255, 255, 0.7)',
      },
    });
