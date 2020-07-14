import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import CloseButton from "../components/CloseButton";

import LoginScreen from "../screens/UserAuthentication/LoginScreen";
import SignUpScreen from "../screens/UserAuthentication/SignUpScreen";
import UserAuthScreen from "../screens/UserAuthentication/UserAuthScreen";

const UserAuthStack = createStackNavigator();

export default function UserAuthNav(props) {
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
        options={{
          title: "Sign Up",
          headerShown: false,
        }}
      />
      <UserAuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login", headerShown: false }}
      />
    </UserAuthStack.Navigator>
  );
}
