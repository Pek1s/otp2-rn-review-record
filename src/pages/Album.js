import React from 'react';
import { View, StyleSheet} from 'react-native';
import AlbumView from '../components/Albumview';

 export default class Album extends React.Component {


  render() {
    return (
      <View style={styles.mainContainer}>
        <AlbumView/>
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
