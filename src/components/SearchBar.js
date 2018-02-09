import React from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { searchArtist, searchAlbum } from '../Spotify';

import { store } from '../Store.js';
import { connect } from 'redux';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', loaded: false};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){
    searchArtist(this.state.search);
    searchAlbum(this.state.search);
  }


  render() {
    store.subscribe(() => this.forceUpdate());

    return (
      <View style={styles.Top}>
        <TextInput
          style={styles.inputBox}
          placeholder="Search artists or albums"
          onChangeText={(search) => this.setState({search})}
        />
        <TouchableOpacity style={styles.Button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  Top: {
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242628',
    flexDirection: 'row',
    paddingHorizontal: 3,
    paddingTop: 22,
  },
  inputBox: {
    backgroundColor: '#3f423f',
    width: '75%',
    height: 40,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 25,
    marginVertical: 10,
    color: 'rgba(255, 255, 255, 0.7)',

  },
  Button: {
    width: '20%',
    height: 40,
    paddingHorizontal: 30,
    backgroundColor: '#35912e',
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  }
});

export default SearchBar;
