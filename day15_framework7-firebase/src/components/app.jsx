import React, { useState } from "react";
import { getDevice } from "framework7/lite-bundle";
import { f7, f7ready, App, Panel, Views, View, Popup, Page, Navbar, Toolbar, NavRight, Link, Block, BlockTitle, LoginScreen, LoginScreenTitle, List, ListInput, ListButton, BlockFooter } from "framework7-react";
import cordovaApp from "../js/cordova-app";

import routes from "../js/routes";
import store from "../js/store";

// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, get, child, push } from "firebase/database";
import { dbRealtime } from "../js/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAx7wKZO9om1eDJIQ7Um1OuZctctsOh6dE",
  authDomain: "day15-5a4b9.firebaseapp.com",
  projectId: "day15-5a4b9",
  storageBucket: "day15-5a4b9.appspot.com",
  messagingSenderId: "756111556061",
  appId: "1:756111556061:web:54b04ec5eac6b7b7f48a34",
  measurementId: "G-EHHCPM1GT4",
  databaseURL: "https://day15-5a4b9-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const MyApp = () => {
  // Login screen state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // State untuk name
  const [address, setAddress] = useState(""); // State untuk address
  const [university, setUniversity] = useState(""); // State untuk university
  const device = getDevice();

  // Framework7 Parameters
  const f7params = {
    name: "day 15", // App name
    theme: "auto", // Automatic theme detection
    store: store,
    routes: routes,
    input: {
      scrollIntoViewOnFocus: device.cordova,
      scrollIntoViewCentered: device.cordova,
    },
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  // Firebase Sign In Function
  const alertLoginData = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        f7.dialog.alert("Welcome " + user.email, () => {
          f7.loginScreen.close();
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        f7.dialog.alert(`Error: ${errorMessage}`);
      });
  };

  // Add data to Realtime Database
  const addData = async () => {
    const usersRef = ref(dbRealtime, "users/");
    const newRef = push(usersRef); // Membuat ID unik
    try {
      await set(newRef, {
        name: name,
        address: address,
        university: university,
        createdAt: new Date().toISOString(),
      });
      f7.dialog.alert("Data added successfully");
      setName(""); // Reset name
      setAddress(""); // Reset address
      setUniversity(""); // Reset university
    } catch (error) {
      f7.dialog.alert("Error adding data: " + error);
    }
  };

  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }
  });

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
        <Toolbar tabbar icons bottom>
          <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Home" />
          <Link tabLink="#view-catalog" iconIos="f7:square_list_fill" iconMd="material:view_list" text="Catalog" />
          <Link tabLink="#view-settings" iconIos="f7:gear" iconMd="material:settings" text="Settings" />
        </Toolbar>

        {/* Main view/tab */}
        <View id="view-home" main tab tabActive url="/" />

        {/* Catalog View */}
        <View id="view-catalog" name="catalog" tab url="/catalog/" />

        {/* Settings View */}
        <View id="view-settings" name="settings" tab url="/settings/" />
      </Views>

      {/* Popup */}
      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup>

      {/* LoginScreen */}
      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput type="text" name="username" placeholder="Your username" value={username} onInput={(e) => setUsername(e.target.value)} />
              <ListInput type="password" name="password" placeholder="Your password" value={password} onInput={(e) => setPassword(e.target.value)} />
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.
                <br />
                Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>

            {/* Add Data and Get Data buttons */}
            <BlockTitle style={{ textAlign: "center" }}>Add Data to Realtime Database</BlockTitle>
            <List form>
              <ListInput type="text" placeholder="Enter name" value={name} onInput={(e) => setName(e.target.value)} />
              <ListInput type="text" placeholder="Enter address" value={address} onInput={(e) => setAddress(e.target.value)} />
              <ListInput type="text" placeholder="Enter university" value={university} onInput={(e) => setUniversity(e.target.value)} />
            </List>
            <List>
              <ListButton title="Add Data" onClick={addData} />
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  );
};

export default MyApp;
