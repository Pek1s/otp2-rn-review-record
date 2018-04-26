import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableOpacity, Alert, Dimensions } from 'react-native';
import axios from 'axios';
import I18n from '../utils/i18n';
import { Actions } from 'react-native-router-flux';
import { store } from '../Store.js';

export default class Signupform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      usernameError: "",
      name: "",
      nameError: "",
      lastname: "",
      lastnameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: ""
    };
    this.Validate = this.Validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toHome = this.toHome.bind(this);
  }

  createMessage = (message) => {
    Alert.alert(
      I18n.t('register.AlertTitle'),
      message,
      [
        {text: I18n.t('register.Cancel')},
        {text: I18n.t('register.OK')},
      ],
      { cancelable: true }
    )
  }
  toHome() {
    Actions.home();
  }

  Validate() {
    let isError = false
    if (this.state.username == "" && this.state.username < 5) {
      this.setState(() => ({usernameError: I18n.t('register.AlertMessageUsername')}));
      isError = true;
    } else {
      this.setState(() => ({usernameError: null}));
    }
    if (this.state.name == "") {
      this.setState(() => ({nameError: I18n.t('register.AlertMessageFirstName')}));
      isError = true;
    } else {
      this.setState(() => ({nameError: null}));
    }
    if (this.state.lastname == "") {
      this.setState(() => ({lastnameError: I18n.t('register.AlertMessageLastName')}));
      isError = true;
    } else {
      this.setState(() => ({lastnameError: null}));
    }
    if (this.state.email == "" && this.state.email < 5 && this.state.email.indexOf("@") === -1) {
      this.setState(() => ({emailError: I18n.t('register.AlertMessageEmail')}));
      isError = true;
    } else {
      this.setState(() => ({emailError: null}));
    }
    if (this.state.password == "" && this.state.password < 5) {
      this.setState(() => ({passwordError: I18n.t('register.AlertMessagePassWord')}));
      isError = true;
    } else {
      this.setState(() => ({passwordError: null}));
    }
    return isError;
  }


  onSubmit() {
    const err = this.Validate();
    if(!err){
    axios.post('https://review-a-record.herokuapp.com/users/create-user',{
      username: this.state.username,
      firstname: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password}
      )
      .then((res) => {
        axios.post(' http://review-a-record.herokuapp.com/login',{
          username: this.state.username,
          password: this.state.password }
          )
          .then((res) => {
            store.dispatch({type: "CHANGE_DATA", field: "jwttoken", payload: res.data.token});
            console.log(store.getState().jwttoken);
            this.toHome();
          })
      })
      .catch((err) => {
        console.log(err.message);
        const message = I18n.t('register.GeneralError');
        this.createMessage(message)
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='username'
          placeholder={I18n.t('register.Username')}
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={false}
          keyboardType='email-address'
          value={this.state.username}
          onChangeText={(text) => this.setState({'username': text})} 
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.usernameError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='name'
          placeholder={I18n.t('register.Name')}
          autoCapitalize='words'
          secureTextEntry={false}
          autoCorrect={false}
          autoFocus={false}
          keyboardType='email-address'
          value={this.state.name}
          onChangeText={(text) => this.setState({'name': text})} 
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.nameError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='lastname'
          placeholder={I18n.t('register.Fam_Name')}
          autoCapitalize='words'
          secureTextEntry={false}
          autoCorrect={false}
          autoFocus={false}
          keyboardType='email-address'
          value={this.state.lastname}
          onChangeText={(text) => this.setState({'lastname': text})} 
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.lastnameError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='email'
          placeholder={I18n.t('register.Email')}
          autoCapitalize='none'
          secureTextEntry={false}
          autoCorrect={false}
          autoFocus={false}
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={(text) => this.setState({'email': text})} 
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.emailError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          name='password'
          placeholder={I18n.t('register.Password')}
          autoCapitalize='none'
          secureTextEntry={true}
          autoCorrect={false}
          autoFocus={false}
          value={this.state.password}
          onChangeText={(text) => this.setState({'password': text})} 
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.passwordError}</Text>
        </View>
        <TouchableOpacity style={styles.Button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>{I18n.t('register.Register')}</Text>
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
    paddingTop: 20,
  },
  warningContainer: {
    height: Dimensions.get("window").height / 40,
    width: Dimensions.get("window").width - 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    height: Dimensions.get("window").height / 14,
    width: Dimensions.get("window").width - 50,
    backgroundColor: '#3f423f',
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 25,
    marginVertical: 0,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  Button: {
    height: Dimensions.get("window").height / 14,
    width: Dimensions.get("window").width - 250,
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
  },
  errorMSG: {
    fontSize: 12,
    fontWeight: '100',
    color: 'rgba(178, 0, 0, 0.7)',
    textAlign: 'center',
  }
});
