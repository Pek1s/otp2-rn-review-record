import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import LoginForm from '../components/Loginform';

export default class Login extends React.Component {

  logIn(){
    Actions.login()
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Logo/>
        <LoginForm/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signInText}> Have an existing account?</Text>
          <TouchableOpacity onPress={this.logIn}>
            <Text style={styles.signInText}> Log In</Text>
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
  signInText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 18,
    fontWeight:'500',
  }

});
