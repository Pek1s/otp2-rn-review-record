import React from 'react';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import AdminPanelActions from '../components/AdminPanelActions';

export default class AdminPanel extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AdminPanelActions/>
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