import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Logo from "../components/Logo";
import AdminPanel from "../components/AdminPanel";

export default class ControlPanel extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AdminPanel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242628",
    justifyContent: "center",
    alignItems: "center"
  }
});
