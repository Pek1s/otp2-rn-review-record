import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import SearchPage from '../pages/SearchPage';

export default class Routes extends React.Component {
  render() {
    return (
        <Router>
          <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="register" component={SignUp} title="Register"/>
            <Scene key="search" component={SearchPage} title="Search" />
          </Stack>
        </Router>
    );
  }
};
