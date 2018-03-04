import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeTabs extends React.Component {

  Search(){
    Actions.search()
  }

render() {
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabsItem} onPress={this.search}>
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}> Add Link Here  </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsItem} onPress={this.search}>
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}> Add Link Here  </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsItem} onPress={this.search}>
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}> Add Link Here  </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsItem} onPress={this.search}>
          <View style={styles.tabsInnerItem}>
            <Text style={styles.generalText}> Add Link Here  </Text>
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
