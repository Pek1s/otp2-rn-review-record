import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  Alert,
  Dimensions
} from "react-native";
import axios from "axios";
import I18n from '../utils/i18n';
import { Actions } from "react-native-router-flux";
import { store } from "../Store.js";

export default class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      usernameError: "",
      password: "",
      passwordError: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.toHome = this.toHome.bind(this);
  }

  toHome() {
    Actions.home();
  }

  Validate() {
    let isError = false
    if (this.state.username == "" && this.state.username < 5) {
      this.setState(() => ({usernameError: I18n.t('login.AlertMessageUsername')}));
      isError = true;
    } else {
      this.setState(() => ({usernameError: null}));
    }
    if (this.state.password == "" || this.state.password < 5) {
      this.setState(() => ({nameError: I18n.t('login.AlertMessagePassword')}));
      isError = true;
    } else {
      this.setState(() => ({nameError: null}));
    }
    return isError;
  }


  onSubmit() {
    Keyboard.dismiss();
    const err = this.Validate();
    if(!err){
    axios
      .post(" http://review-a-record.herokuapp.com/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        store.dispatch({
          type: "CHANGE_DATA",
          field: "user",
          payload: this.state.username
        });
        axios
          .get(
            `http://review-a-record.herokuapp.com/admin-status/${
              res.data.userid
            }`
          )
          .then(res =>
            store.dispatch({
              type: "CHANGE_DATA",
              field: "isAdmin",
              payload: res.data.admin
            })
          );
        store.dispatch({
          type: "CHANGE_DATA",
          field: "jwttoken",
          payload: res.data.token
        });
        store.dispatch({
          type: "CHANGE_DATA",
          field: "userid",
          payload: res.data.userid
        });
        console.log(store.getState().jwttoken);
        this.toHome();
      })
      .catch(err => {
        Alert.alert(
          I18n.t('login.AlertTitle'),
          I18n.t('login.generalError'),
          [
            {text: I18n.t('login.Cancel')},
            {text: I18n.t('login.OK')},
          ],
          { cancelable: true }
        )
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          name="username"
          placeholder={I18n.t('login.Username')}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          keyboardType="email-address"
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.usernameError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          name="password"
          placeholder={I18n.t('login.Password')}
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          autoFocus={false}
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.passwordError}</Text>
        </View>
        <TouchableOpacity style={styles.Button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>{I18n.t('login.Login')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  warningContainer: {
    height: Dimensions.get("window").height / 100,
    width: Dimensions.get("window").width - 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    backgroundColor: "#3f423f",
    height: Dimensions.get("window").height / 14,
    width: Dimensions.get("window").width - 50,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 25,
    marginVertical: 10,
    color: "rgba(255, 255, 255, 0.7)"
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
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center"
  },
  errorMSG: {
    fontSize: 12,
    fontWeight: '100',
    color: 'rgba(178, 0, 0, 0.7)',
    textAlign: 'center',
  }
});
