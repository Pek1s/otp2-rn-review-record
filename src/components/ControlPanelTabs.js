import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class ControlPanelTabs extends React.Component {
  render() {
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.controlpanel()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('settings.AccountSettings')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.language()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('settings.LanguageSettings')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.controlpanel()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('settings.ThemeSettings')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.userreview()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('settings.PrivacyAndSafetySettings')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.controlpanel()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('settings.NotificationsSettings')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.controlpanel()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('settings.Support')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.adminpanel()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('settings.AdminSettings')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => Actions.controlpanel()}
        >
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}>{I18n.t('settings.Info')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1
  },
  tabsItem: {
    height: Dimensions.get("window").height / 8,
    width: Dimensions.get("window").width - 12,
    padding: 4,
    borderBottomWidth : 2,
    borderBottomColor: '#2f3235',
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
