import React from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, ScrollView,  } from 'react-native';
import Reviews from '../components/Reviews';
import AlbumView from '../components/Albumview';
import { getSeveralAlbums } from '../Spotify';
import { removeReview } from '../utils/adminRequests';

 export default class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
}

 pressRemoveReview = async (userid, reviewid, token) => {
  await removeReview(userid, reviewid, token);
  const reviewRemoved = this.state.reviews.filter(x => x.reviewid !== reviewid);
  console.log(reviewRemoved);
  this.setState({reviews: reviewRemoved})
}

componentWillMount(){
  axios.get(' http://review-a-record.herokuapp.com/reviews/album/' + this.props.spotifyid)
      .then((res) => {
          this.setState({ reviews: res.data.data });
          console.log(res.data.data);
      })
      .catch(error => console.log(error));
}

render() {
  return (
    <View style={styles.container}>
      <ScrollView style={{marginTop: 20,  marginLeft: 3 }}>
      <AlbumView  
        albumName={this.props.albumName} 
        spotifyid={this.props.spotifyid} 
        albumImg={this.props.albumImg} 
        artistname={this.props.artistname}
        artistid={this.props.artistid}/>
        {this.state.reviews && this.state.reviews.map(review => <Reviews key={review.reviewid} review={review} removeReview={this.pressRemoveReview} />)}
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
