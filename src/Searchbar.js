import React from 'react';
import { TextInput, View } from 'react-native';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: ''};
  }

  componentDidMount() {
    // return fetch('https://review-a-record.herokuapp.com/')
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Search artists or albums"
          onChangeText={(search) => this.setState({search})}
        />
      </View>
    );
  }
};