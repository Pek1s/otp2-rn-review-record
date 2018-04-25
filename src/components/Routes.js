import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
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
import Profile from "../pages/Profile";
import { Actions } from "react-native-router-flux";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={false}>
          <Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar={true}
          />
          <Scene key="register" component={SignUp} title="Register" />
          <Scene key="home" component={Home} title="Home" hideNavBar={true} />
          <Scene
            key="search"
            component={SearchPage}
            title="Search"
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={"home"}
          />
          <Scene
            key="artist"
            component={Artist}
            title="Artist"
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={"home"}
          />
          <Scene
            key="album"
            component={Album}
            title="Album"
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={"home"}
          />
          <Scene
            key="review"
            component={Review}
            title="Review"
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={"home"}
          />
          <Scene
            key="latest"
            component={LatestReviews}
            title="Latest"
            hideNavBar={true}
            onRight={() => Actions.home()}
            rightTitle={"home"}
          />
          <Scene
            key="controlpanel"
            component={ControlPanel}
            title="Latest"
            hideNavBar={true}
            onRight={() => Actions.home()}
            rightTitle={"home"}
          />
          <Scene
            key="userreview"
            component={UserReviews}
            title="UserReviews"
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={"home"}
          />
          <Scene
            key="profile"
            component={Profile}
            title="Profile"
            hideNavBar={false}
            onRight={() => Actions.home()}
            rightTitle={"home"}
          />
        </Scene>
      </Router>
    );
  }
}
