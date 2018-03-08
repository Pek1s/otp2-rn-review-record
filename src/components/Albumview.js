import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { store } from '../Store.js';
import { Actions } from 'react-native-router-flux';
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

          <View style={styles.middle}>
            <TouchableOpacity style={styles.Button} onPress={() => Actions.review()}>
              <Text style={styles.buttonText}>Leave Review</Text>
            </TouchableOpacity>
          </View>

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
        height: '10%',
        marginTop: 20,
        backgroundColor: '#242628',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Button: {
        width: '25%',
        height: 40,
        width: 120,
        margin: 5,
        paddingTop: 5,
        backgroundColor: '#35912e',
        borderRadius: 25,
      },
      buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
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
