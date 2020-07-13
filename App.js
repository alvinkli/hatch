import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";

import LoginScreen from "./screens/UserAuthentication/LoginScreen";
import SignUpScreen from "./screens/UserAuthentication/SignUpScreen";
import UserAuthScreen from "./screens/UserAuthentication/UserAuthScreen";
import MainNav from "./navigation/MainNav";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserAuthScreen"
          component={UserAuthScreen}
          options={{ title: "Hatch" }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: "Sign Up", headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login", headerBackTitle: "Back" }}
        />
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
