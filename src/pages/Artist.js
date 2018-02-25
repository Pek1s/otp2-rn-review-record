import React from 'react';
import { View, StyleSheet} from 'react-native';
import ArtistView from '../components/Artistview';

 export default class Artist extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <ArtistView/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242628',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

});
