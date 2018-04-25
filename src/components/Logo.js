import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import I18n from '../utils/i18n';

export default class Logo extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <HideWithKeyboard>
          <Image style={styles.image} source={require('../images/Logo.png')}/>
        </HideWithKeyboard>
        <HideWithKeyboard>
          <Text style={styles.logotext}>{I18n.t('logo.welcome')}</Text>
        </HideWithKeyboard>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logotext: {
    marginTop: 10,
    fontSize: 22,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  image: {
    width: 120, height: 100,
  }
});
