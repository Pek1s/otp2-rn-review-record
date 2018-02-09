import React from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { searchArtist, searchAlbum } from '../Spotify';
import SearchResult from '../components/SearchResult';
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
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Search artists or albums"
          onChangeText={(search) => this.setState({search})}
        />
        <TouchableOpacity style={styles.Button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <SearchResult />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  Button: {
    width: 250,
    height: 50,
    backgroundColor: '#35912e',
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 22,
    paddingTop: 10,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  }
});

export default SearchBar;
