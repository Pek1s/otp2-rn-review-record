import React from "react";
import axios from "axios";
import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import { getSeveralAlbums } from "../Spotify";
import { getAlbumIDs } from "../utils/albumId";
import ReviewBox from "../components/ReviewBox";
import { Actions } from 'react-native-router-flux';

class UserReviews extends React.Component {
  state = { reviews: [] };

  componentWillMount() {
    axios
      .get(`http://review-a-record.herokuapp.com/reviews/${this.props.userid}`)
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
            <View key={review.reviewid}>
              <ReviewBox key={review.reviewid} review={review} />
              <Button
                onPress={() => Actions.editreview(review={review})}
                title="Edit review"
                color="green"
                accessibilityLabel="Edit review"
              />
          </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userid: state.userid
  };
}

export default connect(mapStateToProps)(UserReviews);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242628"
  }
});
