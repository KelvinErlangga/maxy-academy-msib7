import React, { useState, useEffect } from "react";
import { f7, f7ready, App, Panel, Views, View, Popup, Page, Navbar, Toolbar, NavRight, Link, Block, LoginScreen, LoginScreenTitle, List, ListInput, ListButton, BlockFooter } from "framework7-react";

import routes from "../js/routes";
import store from "../js/store";

const MyApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const f7params = {
    name: "day_16",
    theme: "auto",
    store: store,
    routes: routes,
  };

  const alertLoginData = () => {
    f7.dialog.alert("Username: " + username + "<br>Password: " + password, () => {
      f7.loginScreen.close();
    });
  };

  f7ready(() => {});

  return (
    <App {...f7params}>
      {/* Left panel with cover effect */}
      <Panel left cover dark>
        <View>
          <Page>
            <Navbar title="Left Panel" />
            <Block>Left panel content goes here</Block>
          </Page>
        </View>
      </Panel>

      {/* Right panel with reveal effect */}
      <Panel right reveal dark>
        <View>
          <Page>
            <Navbar title="Right Panel" />
            <Block>Right panel content goes here</Block>
          </Page>
        </View>
      </Panel>

      {/* Views/Tabs container */}
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        <Toolbar tabbar icons bottom>
          <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Home" />
          <Link tabLink="#view-notification" iconIos="f7:bell_fill" iconMd="material:notifications" text="Notification" />
          <Link tabLink="#view-camera" iconIos="f7:camera_fill" iconMd="material:camera" text="Camera" />
          <Link tabLink="#view-location" iconIos="f7:location_fill" iconMd="material:location_on" text="Location" />
        </Toolbar>

        {/* Main view/tab */}
        <View id="view-home" main tab tabActive url="/" />

        {/* Notification View */}
        <View id="view-notification" name="notification" tab url="/notification/" />

        {/* Camera View */}
        <View id="view-camera" name="camera" tab url="/camera/" />

        {/* Location View */}
        <View id="view-location" name="location" tab url="/location/" />
      </Views>

      {/* Login Screen */}
      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput type="text" name="username" placeholder="Your username" value={username} onInput={(e) => setUsername(e.target.value)} />
              <ListInput type="password" name="password" placeholder="Your password" value={password} onInput={(e) => setPassword(e.target.value)} />
            </List>
            <List>
              <ListButton title="Sign In" onClick={alertLoginData} />
              <BlockFooter>
                Some text about login information.
                <br />
                Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  );
};

export default MyApp;
