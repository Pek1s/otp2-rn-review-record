import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import I18n from '../utils/i18n';
import Signupform from '../components/Signupform';


export default class SignUp extends React.Component {

  logIn(){
    Actions.login()
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Logo/>
        <Signupform/>
        <View style={styles.signupTextCont}>
          <Text style={styles.generalText}>{I18n.t('register.Has_account')}</Text>
          <TouchableOpacity onPress={this.logIn}>
            <Text style={styles.signInText}>{I18n.t('register.LogIn')}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
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
  signInText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 18,
    fontWeight:'500',
  }

});
