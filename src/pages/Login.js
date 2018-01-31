import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView } from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/Loginform';

export default class Login extends React.Component {
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Logo/>
        <LoginForm/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}> Don´t have an account yet?</Text>
          <Text style={styles.signupButton}> Signup</Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 16,
  },
  signupButton:{
    color: '#fff',
    fontSize: 18,
    fontWeight:'500',
  }

});
