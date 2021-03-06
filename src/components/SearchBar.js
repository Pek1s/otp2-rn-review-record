import React from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, ScrollView, Keyboard, Dimensions } from 'react-native';
import { searchArtist, searchAlbum } from '../Spotify';
import SearchResult from '../components/SearchResult';
import { store } from '../Store.js';
import { connect } from 'redux';
import I18n from '../utils/i18n';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){
    Keyboard.dismiss()
    searchArtist(this.state.search);
    searchAlbum(this.state.search);
  }

  render() {
    return (
      <View style={styles.componentsWrapper}>
        <View style={styles.searchObjects}>
          <TextInput style={styles.inputBox}
            placeholder={I18n.t('search.Search artists or albums')}
            onChangeText={(search) => this.setState({search})}
          />
          <TouchableOpacity style={styles.Button} onPress={() => this.onSubmit()}>
            <Text style={styles.buttonText}>{I18n.t('search.Search')}</Text>
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
    backgroundColor: '#222222',
  },
  searchObjects: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#222222',
    flexDirection: 'row',
  },
  inputBox: {
    backgroundColor: '#3f423f',
    height: Dimensions.get("window").height / 14,
    width: '75%',
    margin: 5,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 25,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  Button: {
    width: '25%',
    alignItems: 'center',
    height: Dimensions.get("window").height / 14,
    backgroundColor: '#35912e',
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 21,
    paddingTop: 10,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  resultsContainer: {
    flex: 7,
    backgroundColor: '#242628',
  },
});
