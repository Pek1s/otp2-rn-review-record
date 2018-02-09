import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import Loginform from '../components/Loginform';
import { getSpotifyToken } from '../Spotify.js';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.toSearch = this.toSearch.bind(this);
  }

  componentDidMount(){
    getSpotifyToken();
  }

  signUp(){
    Actions.register()
  }

  toSearch(){
    Actions.search()
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Logo/>
        <Loginform/>
        <TouchableOpacity onPress={this.toSearch}>
            <Text style={styles.signupText}> Try Search</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}> Don´t have an account yet?</Text>
          <TouchableOpacity onPress={this.signUp}>
            <Text style={styles.signupText}> SignUp</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 18,
    fontWeight:'500',
  }

});
