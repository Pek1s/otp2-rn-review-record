import React from 'react';
import { View, StyleSheet} from 'react-native';
import AlbumView from '../components/Albumview';

 export default class Album extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <AlbumView albumName={this.props.albumName} spotifyid={this.props.spotifyid} albumImg={this.props.albumImg} />
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
