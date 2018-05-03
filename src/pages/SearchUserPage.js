import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchUser from '../components/SearchUser';

 export default class SearchUserPage extends React.Component {

  render() {

    return (
      <View style={styles.mainContainer}>
        <SearchUser/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
