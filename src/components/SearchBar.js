import React from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { searchArtist, searchAlbum } from '../Spotify';
import SearchResult from '../components/SearchResult';
import { store } from '../Store.js';
import { connect } from 'redux';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){
    searchArtist(this.state.search);
    searchAlbum(this.state.search);
  }

  render() {
    return (
      <View style={styles.componentsWrapper}>
        <View style={styles.searchObjects}>
          <TextInput style={styles.inputBox}
            placeholder="Search artists or albums"
            onChangeText={(search) => this.setState({search})}
          />
          <TouchableOpacity style={styles.Button} onPress={() => this.onSubmit()}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultsContainer}>
          <ScrollView>
            <SearchResult/>
          </ScrollView>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  componentsWrapper:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#242628',
  },
  searchObjects: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#242628',
    flexDirection: 'row',
  },
  inputBox: {
    backgroundColor: '#3f423f',
    width: '75%',
    height: 40,
    margin: 5,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 25,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  Button: {
    width: '25%',
    height: 40,
    margin: 5,
    paddingTop: 5,
    backgroundColor: '#35912e',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  resultsContainer: {
    flex: 7,
    backgroundColor: '#242628',
  },
});
