import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login'

export default class Routes extends React.Component {
  render(){
    return(
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login"/>
    )
  }
};
}
