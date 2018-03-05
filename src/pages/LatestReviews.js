import React from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ReviewBox from '../components/ReviewBox';
import { getSeveralAlbums } from '../Spotify';

export default class LatestReviews extends React.Component {
  constructor(props) {
      super(props);
      this.state = { reviews: [] };
  }

  componentWillMount(){
    function getAlbumIDs(reviews) {
        let idset = new Set();
        let albumids = '';
        reviews.forEach(x => idset.add(x.spotify_album_id));
        idset.forEach(id => albumids += id + ',');
        return albumids.slice(0,albumids.length - 1);
       }

    axios.get('http://review-a-record.herokuapp.com/reviews/latest')
        .then((res) => {
            this.setState({ reviews: res.data.data });
            let albumids = getAlbumIDs(res.data.data);
            getSeveralAlbums(albumids);
        })
        .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            {this.state.reviews.map(review => <ReviewBox key={review.reviewid} review={review} />)}
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242628',
  }
});
