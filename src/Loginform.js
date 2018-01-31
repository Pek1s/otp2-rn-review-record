import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';
import axios from 'axios';

export default class Login extends React.Component {
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
      <View >
        <TextInput
          style={styles.input}
          name='username'
          placeholder='Username'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          keyboardType='email-address'
          value={this.state.username}
          onChangeText={(text) => this.setState({'username': text})} />
        <TextInput
          style={styles.input}
          name='password'
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry={true}
          autoCorrect={false}
          autoFocus={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({'password': text})} />
          <Button
            onPress={this.onSubmit}
            title="Login"
            />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    width: 100,
    fontWeight: 'bold',
    marginBottom: 10,
    flex: 0.2,
    color: '#595856'
  }
});
