import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MainNav from "./navigation/MainNav";
import UserAuthNav from "./navigation/UserAuthNav";

const fetchFonts = () => {
  return Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
  };

  if (!loaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} />
    );
  }

  if (isloggedIn) {
    return (
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <UserAuthNav login={login} />
      </NavigationContainer>
    );
  }
}
