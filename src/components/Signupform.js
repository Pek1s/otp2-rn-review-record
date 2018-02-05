import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { store } from '../Store.js';

export default class Signupform extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", name: "", lastname: "", email: "", password: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    axios.post('https://review-a-record.herokuapp.com/users/create-user',{
      username: this.state.username,
      firstname: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password}
      )
      .then((res) => {
        store.dispatch({type: "CHANGE_DATA", field: "jwttoken", payload: res.data.token});
        console.log(store.getState().jwttoken)
      })
      .catch((err) => {
        console.log(err.message);
        alert("Please check your input");
      })
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
          name='name'
          placeholder='First name'
          autoCapitalize='words'
          secureTextEntry={false}
          autoCorrect={false}
          autoFocus={false}
          keyboardType='email-address'
          value={this.state.name}
          onChangeText={(text) => this.setState({'name': text})} />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='lastname'
          placeholder='Last name'
          autoCapitalize='words'
          secureTextEntry={false}
          autoCorrect={false}
          autoFocus={false}
          keyboardType='email-address'
          value={this.state.lastname}
          onChangeText={(text) => this.setState({'lastname': text})} />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='email'
          placeholder='Email'
          autoCapitalize='none'
          secureTextEntry={false}
          autoCorrect={false}
          autoFocus={false}
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={(text) => this.setState({'email': text})} />
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
          <Text style={styles.buttonText}>Register</Text>
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
    paddingTop: 40,
  },
  inputBox: {
    backgroundColor: '#3f423f',
    width: 350,
    height: 50,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 25,
    marginVertical: 5,
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
