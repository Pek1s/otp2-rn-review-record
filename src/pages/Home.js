import React from 'react';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import HomeTabs from '../components/HomeTabs';

export default class Home extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      <Logo/>
      <HomeTabs/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
