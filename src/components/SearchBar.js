import React from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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
    

    return (
      <View style={styles.container}>
       <View style={styles.top}>
        <TextInput
          style={styles.inputBox}
          placeholder="Search artists or albums"
          onChangeText={(search) => this.setState({search})}
        />
        <TouchableOpacity style={styles.Button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        </View>
        <SearchResult />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242628',
    flexDirection: 'row',

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
