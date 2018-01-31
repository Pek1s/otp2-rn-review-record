import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/Logo.png')}/>
        <Text style={styles.logotext}>Welcome to Review App</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
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
