import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import I18n from '../utils/i18n';
import { Actions } from "react-native-router-flux";

export default class HomeTabs extends React.Component {
  render() {
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.search()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('home.Search')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.latest()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('home.LatestReviews')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.login()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('home.MyProfile')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.settings()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('home.Settings')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  tabsItem: {
    padding: 5,
    height: "50%",
    width: "50%"
  },
  tabsInnerItem: {
    flex: 1,
    backgroundColor: "#3f423f",
    alignItems: "center",
    justifyContent: "center"
  },
  generalText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 18,
    fontWeight: "500"
  }
});
