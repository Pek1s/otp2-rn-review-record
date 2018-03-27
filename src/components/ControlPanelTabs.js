import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ControlPanelTabs extends React.Component {
    render() {
        return (
          <View style={styles.tabsContainer}>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.search()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> Account Settings  </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.latest()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> System Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.login()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> Admin Settings </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.controlpanel()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> Some Other Settings </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.controlpanel()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> Some Other Settings </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.controlpanel()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> Some Other Settings </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.controlpanel()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> Some Other Settings </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.controlpanel()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> Some Other Settings </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabsItem} onPress={() => Actions.controlpanel()}>
              <View style={styles.tabsInnerItem}>
                <Text style={styles.generalText}> Some Other Settings </Text>
              </View>
            </TouchableOpacity>
          </View>
        )
      }
    };
    
    const styles = StyleSheet.create({
      tabsContainer: {
        flex: 1,
     },
      tabsItem: {
        height: (Dimensions.get('window').height/12),
        width: (Dimensions.get('window').width)-12,
        padding: 4,
     },
      tabsInnerItem: {
        height: '100%',
        width: '100%',
        backgroundColor: '#131316',
        justifyContent: 'center',
      },
      generalText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 18,
        fontWeight:'500',
      }
    });