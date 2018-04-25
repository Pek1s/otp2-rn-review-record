import React from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.resultText}>{this.props.username}</Text>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => Actions.userreview()}
          >
            <Text style={styles.buttonText}>Own reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.user
  };
}

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#242628"
  },

  Button: {
    width: "80%",
    height: "15%",
    width: 120,
    margin: 5,
    paddingTop: 5,
    backgroundColor: "#35912e",
    borderRadius: 25
  },
  buttonText: {
    fontSize: 20,
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
  },
  inputBox: {
    backgroundColor: "#3f423f",
    width: "75%",
    height: 40,
    margin: 5,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 25,
    color: "rgba(255, 255, 255, 0.7)"
  }
});
