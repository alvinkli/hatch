import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountDetailsScreen from "../screens/Account/AccountDetailsScreen";
import AccountOptionsScreen from "../screens/Account/AccountOptionsScreen";
import HelpScreen from "../screens/Account/HelpScreen";
import ManageReviewsScreen from "../screens/Account/ManageReviewsScreen";
import NotificationsScreen from "../screens/Account/NotificationsScreen";
import PaymentInfoScreen from "../screens/Account/PaymentInfoScreen";

const Stack = createStackNavigator();

export default function OrdersNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountDetailsScreen"
        component={AccountDetailsScreen}
        options={{ title: "Account" }}
      />
      <Stack.Screen
        name="AccountOptionsScreen"
        component={AccountOptionsScreen}
        options={{ title: "Accoungt Options" }}
      />
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{ title: "Help" }}
      />
      <Stack.Screen
        name="ManageReviewsScreen"
        component={ManageReviewsScreen}
        options={{ title: "Manage Reviews" }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ title: "Notifications" }}
      />
      <Stack.Screen
        name="PaymentInfoScreen"
        component={PaymentInfoScreen}
        options={{ title: "Payment Info" }}
      />
    </Stack.Navigator>
  );
}
