import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { store } from '../Store.js';
import { Actions } from 'react-native-router-flux';
import ResponsiveImage from 'react-native-responsive-image';
import { connect } from 'react-redux';
const notFoundImage = require('../images/question-mark.jpg');


class Artistresult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgUrl = (images) => {
      if (images[0]) {
        return images[0].url;
      } else {
        return 'notfound';
      }
    }

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
 },
 artistInnerItem: {
   flex: 1,
   padding: 5,
   paddingBottom: 20,
   height: (Dimensions.get('window').height/3) - 12,
   width: (Dimensions.get('window').width/2) - 4,
   backgroundColor: '#242628',
   justifyContent: 'center',
 },
 artistName: {
   backgroundColor: '#242628',
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
