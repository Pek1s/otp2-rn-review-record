import React from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { store } from "../Store.js";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("http://review-a-record.herokuapp.com/secure/users/all", {
        headers: {
          "Content-Type": "application/json",
          token: this.props.jwttoken
        }
      })
      .then(res => {
        store.dispatch({
          type: "CHANGE_DATA",
          field: "users",
          payload: res.data.all_users
        });
      });
  }
  onSubmit(userid) {
    axios.post("http://review-a-record.herokuapp.com/secure/users/admin-true", {
      token: this.props.jwttoken,
      userid: userid
    });
    Actions.home();
  }
  render() {
    console.log(this.props.users);
    return (
      <View style={styles.container}>
      <ScrollView style={{ marginTop: 20, marginLeft: 3 }}>
        {this.props.users.length > 0 &&
          this.props.users.map(user => (
            <View style={styles.top} key={user.userid}>
              <Text style={styles.resultText}>{user.username}</Text>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => this.onSubmit(user.userid)}
              >
                <Text style={styles.buttonText}>make admin</Text>
              </TouchableOpacity>
            </View>
          ))}
          </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    jwttoken: state.jwttoken,
    users: state.users
  };
}

export default connect(mapStateToProps)(Users);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: 140,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#242628"
  },

  Button: {
    width: "80%",
    height: "15%",
    width: 50,
    margin: 5,
    paddingTop: 5,
    backgroundColor: "#35912e",
    borderRadius: 25
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center"
  },
  bottom: {
    flex: 1,
    backgroundColor: "#242628"
  },
  resultText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 22,
    color: "rgba(255, 255, 255, 0.7)"
  }
});
