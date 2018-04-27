
import React, { Component } from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  Dimensions
} from "react-native";
import { Router, Scene } from "react-native-router-flux";
import I18n from '../utils/i18n';

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import Artist from "../pages/Artist";
import Album from "../pages/Album";
import Review from "../pages/Review";
import LatestReviews from "../pages/LatestReviews";
import ControlPanel from "../pages/ControlPanel";
import UserReviews from "../pages/UserReviews";
import EditReview from "../pages/EditReview";
import LanguageSettings from '../pages/LanguageSettings';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class TabIcon extends Component {
  render() {
    var color = this.props.selected ? '#ffffff' : '#ffffff';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "circle"} size={28}/>
        <Text style={{color: color, fontSize: 15}}>{this.props.title}</Text>
      </View>
    );
  }
}
export default class Routes extends React.Component {

  render() {
    return (
      <Router navigationBarStyle={styles.navBar}
      titleStyle={styles.navBarTitle}
      barButtonTextStyle={styles.barButtonTextStyle}
      barButtonIconStyle={styles.barButtonIconStyle}
      tintColor='white'
      >
        <Scene 
          key="root" 
          hideNavBar={false}
        >
          <Scene
            key="login"
            component={Login}
            renderTitle={() => {return I18n.t('routes.Login')}}
            hideNavBar={true}
          />
          <Scene 
            key="register" 
            component={SignUp} 
            renderTitle={() => {return I18n.t('routes.Register')}}
            hideNavBar={true}
          />
          <Scene 
            key="tabbar"
            tabs={true}
            tabBarStyle={styles.tabBar} 
            tabBarPosition='bottom'
          >
            <Scene 
              key="home" 
              component={Home} 
              renderTitle={() => {return I18n.t('routes.Home')}} 
              hideNavBar={true} 
              iconName= "home"
              icon={TabIcon}
            />
            <Scene
              key="search"
              component={SearchPage}
              renderTitle={() => {return I18n.t('routes.Search')}}
              hideNavBar={true}
              iconName= "search"
              icon={TabIcon}
            />
            <Scene
              key="latest"
              component={LatestReviews}
              renderTitle={() => {return I18n.t('routes.Latest')}}
              hideNavBar={true}
              iconName= "newspaper-o"
              icon={TabIcon}

            />
            <Scene
              key="settings"
              component={ControlPanel}
              renderTitle={() => {return I18n.t('routes.Settings')}}
              hideNavBar={false}
              iconName= "gear"
              icon={TabIcon}
            />
            
          </Scene>
        <Scene
            key="userreview"
            component={UserReviews}
            renderTitle={() => {return I18n.t('routes.UserReviews')}}
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={() => {return I18n.t('routes.home')}}
        />  
        <Scene
            key="language"
            component={LanguageSettings}
            renderTitle={() => {return I18n.t('routes.languageSettings')}}
            hideNavBar={false}
          />
        <Scene
            key="editreview"
            component={EditReview}
            renderTitle={() => {return I18n.t('routes.EditReview')}}
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={() => {return I18n.t('routes.home')}}
          />
          <Scene
            key="artist"
            component={Artist}
            renderTitle={() => {return I18n.t('routes.Artist')}}
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={() => {return I18n.t('routes.home')}}
          />
          <Scene
            key="album"
            component={Album}
            renderTitle={() => {return I18n.t('routes.Album')}}
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={() => {return I18n.t('routes.home')}}
          />
          <Scene
            key="review"
            component={Review}
            renderTitle={() => {return I18n.t('routes.Review')}}
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={() => {return I18n.t('routes.home')}}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({

    navBar: {
    backgroundColor: '#222222',
    height: Dimensions.get("window").height / 10,
    },
    navBarTitle: {
      color: '#FFFFFF',
      fontSize: 20
    },
    barButtonTextStyle: {
      color: 'red'
    },
    barButtonIconStyle: {
      tintColor: 'white'
    },
    tabBar: {
      borderTopColor: '#222222',
      borderTopWidth: 1 / PixelRatio.get(),
      backgroundColor: '#222222',
      opacity: 0.98
  },
});
