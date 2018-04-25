
import React, { Component } from "react";
import { Router, Stack, Scene, Text } from "react-native-router-flux";
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

import { Actions } from 'react-native-router-flux';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color:selected ? 'red' : 'black'}}>{title}</Text>
  )
}

export default class Routes extends React.Component {

  render() {
    return (
      <Router>
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
          />
          <Scene 
            key="tabbar"
            tabs={true}
            tabBarStyle={{backgroundColor: '#222222'}}
            tabBarPosition='bottom'
          >
            <Scene 
              key="home" 
              component={Home} 
              renderTitle={() => {return I18n.t('routes.Home')}} 
              hideNavBar={true} 
            />
            <Scene
              key="search"
              component={SearchPage}
              renderTitle={() => {return I18n.t('routes.Search')}}
              hideNavBar={false}
              onRight={() => Actions.home()}
              rightTitle={() => {return I18n.t('routes.home')}}
            />
            <Scene
              key="latest"
              component={LatestReviews}
              renderTitle={() => {return I18n.t('routes.Latest')}}
              hideNavBar={true}
              onRight={() => Actions.home()}
              rightTitle={() => {return I18n.t('routes.home')}}
            />
            <Scene
              key="settings"
              component={ControlPanel}
              renderTitle={() => {return I18n.t('routes.Settings')}}
              hideNavBar={false}
              onRight={() => Actions.home()}
              rightTitle={() => {return I18n.t('routes.home')}}
            />
            <Scene
              key="userreview"
              component={UserReviews}
              renderTitle={() => {return I18n.t('routes.UserReviews')}}
              hideNavBar={false}
              onRight={() => Actions.home()}
              rightTitle={() => {return I18n.t('routes.home')}}
            />
          </Scene>
        <Scene
            key="language"
            component={LanguageSettings}
            renderTitle={() => {return I18n.t('routes.languageSettings')}}
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={() => {return I18n.t('routes.home')}}
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
