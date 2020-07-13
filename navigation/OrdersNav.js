import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function OrdersNav() {
  return (
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
  );
}
