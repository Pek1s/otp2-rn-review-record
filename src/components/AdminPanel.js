import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import { Actions } from "react-native-router-flux";

class AdminPanel extends React.Component {
  render() {
    if (this.props.isAdmin == true) {
      return (
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={styles.tabsItem}
            onPress={() => Actions.users()}
          >
            <View style={styles.tabsInnerItem}>
              <Text style={styles.generalText}>All users</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.generalText}>Nothing to see here</Text>
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isAdmin: state.isAdmin
  };
}

export default connect(mapStateToProps)(AdminPanel);

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1
  },
  tabsItem: {
    height: Dimensions.get("window").height / 8,
    width: Dimensions.get("window").width - 12,
    padding: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#2f3235"
  },
  tabsInnerItem: {
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  generalText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 18,
    fontWeight: "500"
  }
});
