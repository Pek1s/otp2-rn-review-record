import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { store } from '../Store.js';
import { Actions } from 'react-native-router-flux';
import ResponsiveImage from 'react-native-responsive-image';
import { connect } from 'react-redux';
import imgUrl from '../utils/imgUrl';
const notFoundImage = require('../images/question-mark.jpg');


class Artistresult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.artistsContainer}>
        {this.props.artists && this.props.artists.map( x =>
          <TouchableOpacity key={x.id} onPress={ () => Actions.artist({ spotifyid: x.id, artistName: x.name, artistImg: imgUrl(x.images) })} >
            <View key={x.id} style={styles.artistInnerItem}>
                <Image style={styles.images}
                source={x.images.length > 0 ? {uri: x.images[0].url} : notFoundImage}/>
                <View style={styles.artistName}>
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
  return { artists: state.artists.items }
};

export default connect(mapStateToProps)(Artistresult);

const styles = StyleSheet.create({
  artistsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#222222',
 },
 artistInnerItem: {
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
 artistName: {
   backgroundColor: '#222222',
 },
 resultText: {
   textAlign: 'center',
   fontWeight: '500',
   color: 'rgba(255, 255, 255, 0.7)',
 },
 images: {
   borderRadius: 120,
   height: '100%',
   width: '100%',
 },
});
