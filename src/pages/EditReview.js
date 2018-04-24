import React from 'react';
import { View, StyleSheet } from 'react-native';
import EditReviewComponent from '../components/EditReviewComponent';

export default class EditReview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <EditReviewComponent review={this.props.review} />
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