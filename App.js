import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/pages/Login';
import { Provider } from 'react-redux';
import { store } from './src/Store.js';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar backgroundColor='#1c313a' barStyle="light-content"/>
            <Login/>
          </View>
        </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242628',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
