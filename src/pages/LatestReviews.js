import React from "react";
import axios from "axios";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ReviewBox from "../components/ReviewBox";
import { getSeveralAlbums } from "../Spotify";
import { getAlbumIDs } from "../utils/albumId";

export default class LatestReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }

  componentWillMount() {
    axios
      .get("http://review-a-record.herokuapp.com/reviews/latest")
      .then(res => {
        this.setState({ reviews: res.data.data });
        let albumids = getAlbumIDs(res.data.data);
        getSeveralAlbums(albumids);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginTop: 20, marginLeft: 3 }}>
          {this.state.reviews.map(review => (
            <ReviewBox key={review.reviewid} review={review} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222"
  }
});
