import React from 'react';
import { View, StyleSheet} from 'react-native';
import Makereview from '../components/Makereview.js';

 export default class Artist extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    return (
      <View style={styles.container}>
        <Makereview 
            spotifyid={this.props.spotifyid}
            albumName={this.props.albumName}
            albumid={this.props.albumid}
            artistname={this.props.artistname}
            artistid={this.props.artistid}
            albumImg={this.props.albumImg}
        />
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