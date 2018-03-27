import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeTabs extends React.Component {

  showDrawer(){
      Actions.drawerMenu(params);
  }

  Search(){
    Actions.search()
  }

render() {
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.search()}>
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}> Search Album  </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.latest()}>
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}> Latest Reviews  </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.login()}>
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}> Login page </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.showDrawer()}>
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}> Open Menu </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
 },
  tabsItem: {
   padding: 5,
   height: '50%',
   width: '50%',
 },
  tabsInnerItem: {
    flex: 1,
    backgroundColor: '#292d35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 18,
    fontWeight:'500',
  }
});
