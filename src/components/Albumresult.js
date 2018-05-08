import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { store } from '../Store.js';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import imgUrl from '../utils/imgUrl';
const notFoundImage = require('../images/question-mark.jpg');

class Albumresult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.albumsContainer}>
      {this.props.albums && this.props.albums.map( x =>
          <TouchableOpacity key={x.id} onPress={ () => Actions.album({ 
            spotifyid: x.id, 
            artistname: x.artists[0].name, 
            artistid: x.artists[0].id, 
            albumName: x.name, 
            albumImg: imgUrl(x.images) })} >
            <View key={x.id} style={styles.albumInnerItem}>
              <Image style={styles.images}
                source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
                <View style={styles.albumName}>
                  <Text style={styles.resultText}>{x.name}</Text>
                </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
};

function mapStateToProps(state) {
  return { albums: state.albums.items };
}

export default connect(mapStateToProps)(Albumresult);

const styles = StyleSheet.create({
  albumsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#222222',
 },
 albumInnerItem: {
   flex: 1,
   paddingTop: 10,
   paddingBottom: 20,
   paddingLeft: 10,
   paddingRight: 10,
   height: (Dimensions.get('window').height/3) - 12,
   width: (Dimensions.get('window').width/2) - 4,
   backgroundColor: '#222222',
   justifyContent: 'center',
 },
 albumName: {
   backgroundColor: '#222222',
 },
 resultText: {
   textAlign: 'center',
   fontWeight: '500',
   color: 'rgba(255, 255, 255, 0.7)',
 },
 images: {
   height: '100%',
   width: '100%'
 },
});
