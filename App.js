import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
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

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
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
      text: Colors.primary,
      border: Colors.primary,
    },
  };

  if (!isLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setIsLoaded(true)} />
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
