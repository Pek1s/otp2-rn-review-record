import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import Loginform from '../components/Loginform';
import { getSpotifyToken } from '../Spotify.js';
import I18n from '../utils/i18n';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    getSpotifyToken();
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Logo/>
        <Loginform/>
        <TouchableOpacity onPress={() => Actions.search()}>
            <Text style={styles.generalText}> Try Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.home()}>
        <Text style={styles.generalText}> Go Home</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.generalText}>{I18n.t('login.No_account')}</Text>
          <TouchableOpacity onPress={() => Actions.register()}>
            <Text style={styles.signupText}>{I18n.t('login.SignUp')}</Text>
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
  generalText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 18,
    fontWeight:'500',
  },
  signupText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 18,
    fontWeight:'500',
  }

});
