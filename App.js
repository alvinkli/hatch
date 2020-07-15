import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MainNav from "./navigation/MainNav";
import UserAuthNav from "./navigation/UserAuthNav";
import Colors from "./constants/Colors";

import { withAuthenticator } from "aws-amplify-react-native";

import Amplify from "@aws-amplify/core";
import config from "./aws-exports";
Amplify.configure(config);

const fetchFonts = () => {
  return Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
};

function App() {
  const [loaded, setLoaded] = useState(false);

  const MyTheme = {
    dark: false,
    colors: {
      primary: Colors.primary,
      background: "#FFFFFF",
      card: "#FFFFFF",
      text: Colors.primary,
      border: Colors.primary,
    },
  };
  if (!loaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} />
    );
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <MainNav />
    </NavigationContainer>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
