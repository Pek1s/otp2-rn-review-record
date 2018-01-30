import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './src/Test';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Test />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
