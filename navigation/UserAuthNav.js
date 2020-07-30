import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

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
          headerShown: false,
        }}
      />
      <UserAuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
        initialParams={{ login: props.login }}
      />
      <UserAuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
        initialParams={{ login: props.login }}
      />
    </UserAuthStack.Navigator>
  );
}
