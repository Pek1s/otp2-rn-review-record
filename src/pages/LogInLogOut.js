import React from 'react';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import LoginLogout from '../components/LoginLogout';

export default class ControlPanel extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <LoginLogout/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242628',
    justifyContent: 'center',
    alignItems: 'center',
  }
});