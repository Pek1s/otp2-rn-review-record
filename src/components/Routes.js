import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';

import SideMenu from '../components/SideMenu';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import Artist from '../pages/Artist';
import Album from '../pages/Album';
import Review from '../pages/Review';
import LatestReviews from '../pages/LatestReviews';




export default class Routes extends React.Component {
  render() {
    return (
        <Router>
          <Scene key="root" hideNavBar={false}>
            <Scene 
              key="login"
              component={Login} 
              title="Login"
              initial
            />
            <Scene
              key="register"
              component={SignUp}
              title="Register"
            />
            <Scene 
              key="home" 
              component={Home} 
              title="Home" 
              hideNavBar={false} 
            />
            <Drawer
                hideNavBar
                key="drawerMenu"
                contentComponent={SideMenu}
                drawerWidth={250}
                drawerPosition="right"
            >
                <Scene
                    key="login"
                    component={Login}

                />
                <Scene
                    key="register"
                    component={SignUp}
                />

                <Scene
                    key="home"
                    component={Home}
                />
                </Drawer>
            <Scene 
              key="search" 
              component={SearchPage} 
              title="Search" 
              hideNavBar={false} 
            />
            <Scene 
              key="artist" 
              component={Artist} 
              title="Artist" 
              hideNavBar={false} 
            />
            <Scene 
              key="album" 
              component={Album} 
              title="Album" 
              hideNavBar={false} 
            />
            <Scene key="review" 
              component={Review} 
              title="Review" 
              hideNavBar={false} 
            />
            <Scene key="latest" 
              component={LatestReviews} 
              title="Latest" 
              hideNavBar={true} 
            />
          </Scene>
        </Router>
        
    );
  }
};
