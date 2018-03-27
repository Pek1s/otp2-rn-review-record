import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { store } from './src/Store.js';
import Exponent from 'expo';

import Routes from './src/components/Routes';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar backgroundColor='#242628'
            barStyle="light-content"
            translucent={true}/>
            <Routes/>
          </View>
        </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Exponent.Constants.statusBarHeight
  }
});
