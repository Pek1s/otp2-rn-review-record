import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit() {

    axios.post(' http://review-a-record.herokuapp.com/login',{
      username: this.state.username,
      password: this.state.password }
      )
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='username'
          placeholder='Username'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={false}
          keyboardType='email-address'
          value={this.state.username}
          onChangeText={(text) => this.setState({'username': text})} />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='password'
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry={true}
          autoCorrect={false}
          autoFocus={false}
          value={this.state.password}
          onChangeText={(text) => this.setState({'password': text})} />
        <TouchableOpacity style={styles.Button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    backgroundColor: '#3f423f',
    width: 350,
    height: 50,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 25,
    marginVertical: 10,
    color: 'rgba(255, 255, 255, 0.7)',
  },
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
