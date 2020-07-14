import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

// import LoginScreen from "./screens/UserAuthentication/LoginScreen";
// import SignUpScreen from "./screens/UserAuthentication/SignUpScreen";
import UserAuthScreen from "./screens/UserAuthentication/UserAuthScreen";
import MainNav from "./navigation/MainNav";
import UserAuthNav from "./navigation/UserAuthNav";
import Colors from "./constants/Colors";

const fetchFonts = () => {
  return Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserAuthNav" component={UserAuthNav} />
        <Stack.Screen name="MainNav" component={MainNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
