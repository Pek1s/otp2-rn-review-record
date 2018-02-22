import React from 'react';
import { View, StyleSheet} from 'react-native';
import ArtistView from '../components/Artistview';

 export default class Artist extends React.Component {


  render() {
    return (
      <View style={styles.mainContainer}>
        <ArtistView/>
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
