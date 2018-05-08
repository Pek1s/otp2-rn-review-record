import React from "react";
import axios from "axios";
import I18n from "../utils/i18n";
import {
  Button,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Keyboard,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", results: [], deleted: null };
    this.onSubmit = this.onSubmit.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  onSubmit() {
    Keyboard.dismiss();
    if (this.props.token) {
      axios.get(
          "http://review-a-record.herokuapp.com/secure/users/find/" +
            this.state.search,
          {
            headers: {
              "Content-Type": "application/json",
              token: this.props.token
            }
          }
        )
        .then(res => {
          this.setState({ results: res.data.user });
        });
    }
  }

  removeUser(userID) {
    axios.post("http://review-a-record.herokuapp.com/secure/users/delete-user",
          {
            token: this.props.token,
            username: this.props.username,
            user_to_delete: userID,
          }
        )
        .then(res => {
          if (res.data.status === 'success') {
            const updatedList = this.state.results.filter(user => user.userid !== userID);
            console.log(updatedList);
            this.setState({ results: [...updatedList], deleted: 'User deleted' });
            setTimeout(() => {
              this.setState({ deleted: null });
            }, 4000);
            return;
          } 
        });
  }

  render() {
    return (
      <View style={styles.componentsWrapper}>
        <View style={styles.searchObjects}>
          <TextInput
            style={styles.inputBox}
            placeholder={I18n.t("login.Username")}
            onChangeText={search => this.setState({ search })}
          />
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.onSubmit()}
          >
            <Text style={styles.buttonText}>{I18n.t("search.Search")}</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.resultsContainer}>
        {this.state.deleted && <Text style={styles.deletedText}> {this.state.deleted} </Text>}
          <ScrollView>
           { this.state.results.length > 0 &&
           <View>
            {this.state.results.map(user => (
              <View key={`user${user.userid}`} style={styles.resultsContainer}>
              <Text style={styles.resultText}>{user.username} </Text>
              <Button
                  onPress={() =>
                    this.removeUser(
                      user.userid
                    )
                  }
                  key={`button_${user.userid}`}
                  title="Remove user"
                  color="#ff0000"
                  accessibilityLabel="Remove review"
                />
                </View>
            ))}
           </View> }
          </ScrollView>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.jwttoken, username: state.user };
}

export default connect(mapStateToProps)(SearchUser);

const styles = StyleSheet.create({
  componentsWrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#222222"
  },
  searchObjects: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: "center",
    backgroundColor: "#222222",
    flexDirection: "row"
  },
  inputBox: {
    backgroundColor: "#3f423f",
    height: Dimensions.get("window").height / 14,
    width: "75%",
    margin: 5,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 25,
    color: "rgba(255, 255, 255, 0.7)"
  },
  Button: {
    width: "25%",
    alignItems: "center",
    height: Dimensions.get("window").height / 14,
    backgroundColor: "#35912e",
    borderRadius: 25,
    marginVertical: 10
  },
  buttonText: {
    fontSize: 21,
    paddingTop: 10,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center"
  },
  resultsContainer: {
    flex: 7,
    backgroundColor: "#242628"
  },
  resultText: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  deletedText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: 'rgba(252, 0, 79, 0.7)',
  }
});
