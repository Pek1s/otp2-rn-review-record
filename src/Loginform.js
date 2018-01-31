import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e) {

  }
  render() {
    return (
      <View >
        <Text style={styles.title}>Login</Text>
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
          autoCorrect={false}
          autoFocus={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({'password': text})} />
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
    color: '#595856',

  },
  title: {
    fontSize: 30
  }
});
