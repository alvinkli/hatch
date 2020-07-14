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

const fetchFonts = () => {
  return Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const MyTheme = {
    dark: false,
    colors: {
      primary: Colors.primary,
      background: "#FFFFFF",
      card: "#FFFFFF",
      text: Colors.text,
      border: Colors.divider,
    },
  };
  if (!loaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} />
    );
  }

  if (isloggedIn) {
    return (
      <NavigationContainer theme={MyTheme}>
        <MainNav />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer theme={MyTheme}>
        <UserAuthNav login={login} />
      </NavigationContainer>
    );
  }
}
