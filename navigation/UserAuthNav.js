import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";

import LoginScreen from "../screens/UserAuthentication/LoginScreen";
import SignUpScreen from "../screens/UserAuthentication/SignUpScreen";
import UserAuthScreen from "../screens/UserAuthentication/UserAuthScreen";

const UserAuthStack = createStackNavigator();

export default function UserAuthNav() {
  return (
    <UserAuthStack.Navigator mode="modal">
      <UserAuthStack.Screen
        name="UserAuthScreen"
        component={UserAuthScreen}
        options={{
          title: "Hatch",
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <UserAuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: "Sign Up", headerBackTitle: "Back" }}
      />
      <UserAuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login", headerBackTitle: "Back" }}
      />
    </UserAuthStack.Navigator>
  );
}
