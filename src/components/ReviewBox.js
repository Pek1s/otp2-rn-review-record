import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getSeveralAlbums } from '../Spotify';
import { connect } from 'react-redux';
const notFoundImage = require('../images/question-mark.jpg');

class ReviewBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = (reviewDate) => {
        let datetime = new Date(reviewDate);
        let day = datetime.toLocaleDateString();
        let time = datetime.toLocaleTimeString();
        return day + " " + time;
    }

    const currentAlbum = (spotifyid) => {
        if (this.props.albums) {
            return this.props.albums.filter(x => x.id === spotifyid);
        }
        return null;
    }
    const imgUrl = (images) => {
        if (images[0]) {
          return images[0].url;
        } else {
          return notFoundImage;
        }
    }
    const current = currentAlbum(this.props.review.spotify_album_id)
    console.log()
    return (
       
          <View style={styles.reviewContainer}>
          { this.props.albums && (
          <View style={styles.albumInfo}>
            <Image source={ current[0].images.length > 0 ? {uri: current[0].images[0].url} : notFoundImage  } style={styles.images} />
            <Text style={styles.artist}>{ current[0].artists[0].name }</Text>
            <Text style={styles.artist}>{ current[0].name }</Text>
          </View>) }
            <View style={styles.reviewBox}>
                <Text style={styles.reviewText}>{ this.props.review.review_text }</Text>
                <Text style={styles.reviewer}>{ this.props.review.reviewer}</Text>
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
    backgroundColor: '#242628',
    maxHeight: 200,
    justifyContent: 'space-around',
  },
  albumInfo: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderBottomRightRadius: 4,
  },
  images: {
    borderRadius: 100,
    marginRight: 5,
    marginTop: 5,
    width: 75,
    height: 75,
  },
  reviewBox: {
      flex: 2,
      flexDirection: 'column',
  },
  reviewText: {
    flex: 2,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'left',
  },
  reviewer: {
      fontWeight: '500',
      justifyContent: 'flex-end',
      textAlignVertical: 'bottom',
      textAlign: 'right',
  },
});
