import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { getSeveralAlbums } from '../Spotify';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import date from '../utils/formatDateAndTime';
import imgUrl from '../utils/imgUrl';
import notFoundImage from '../images/question-mark.jpg';

class ReviewBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const toAlbumPage = () => {
      Actions.album({ 
          spotifyid: this.props.review.spotify_album_id,
          albumName: album[0].artists[0].name,
          albumImg: imgUrl(album[0].images)
      })
    }
    const currentAlbum = (spotifyid) => {
      if (this.props.albums) {
        return this.props.albums.filter(x => x.id === spotifyid);
      }
      return null;
    }
    const album = currentAlbum(this.props.review.spotify_album_id);
    
    return (  
      <View style={styles.reviewContainer}>
        { this.props.albums && album[0] && (
            <View style={styles.albumInfo}>
            <TouchableOpacity
              key={this.props.review.spotify_album_id}
              onPress={ toAlbumPage }
            >
              <Image source={ album[0].images.length > 0 ? {uri: album[0].images[0].url} : notFoundImage  } style={styles.images} />
              <Text style={styles.artist}>{ album[0].artists[0].name }</Text>
              <Text style={styles.artist}>{ album[0].name }</Text>
            </TouchableOpacity>
            </View> 
          
        ) }
          <View style={styles.reviewBox}>
            <Text style={styles.reviewText}>{ this.props.review.review_text }</Text>
            <Text style={styles.reviewer}>{ this.props.review.username}</Text>
            <Text style={styles.reviewer}>{ date(this.props.review.date_time)}</Text>
          </View>
  
      </View> 
        );
  }
};

function mapStateToProps(state) {
    return { albums: state.recentreviews.albums  }
  };

export default connect(mapStateToProps)(ReviewBox);

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#242628',
    maxHeight: 200,
    justifyContent: 'space-around',
  },
  albumInfo: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  images: {
    borderRadius: 100,
    marginRight: 5,
    marginTop: 5,
    width: 75,
    height: 75,
  },
  artist: {
    fontWeight: '500',
    color: '#242628',
  },
  reviewBox: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
  },
  reviewText: {
    flex: 2,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'left',
  },
  reviewer: {
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'flex-end',
    textAlignVertical: 'bottom',
    textAlign: 'right',
    marginRight: 5,
  },
});
