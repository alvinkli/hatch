import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AccountDetailsScreen from "../screens/Account/AccountDetailsScreen";
import AccountOptionsScreen from "../screens/Account/AccountOptionsScreen";
import HelpScreen from "../screens/Account/HelpScreen";
import ManageReviewsScreen from "../screens/Account/ManageReviewsScreen";
import NotificationsScreen from "../screens/Account/NotificationsScreen";
import PaymentInfoScreen from "../screens/Account/PaymentInfoScreen";
import Colors from "../constants/Colors";

const AccountStack = createStackNavigator();

export default function AccountNav() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountOptionsScreen"
        component={AccountOptionsScreen}
        options={{ title: "Hatch" }}
      />
      <AccountStack.Screen
        name="AccountDetailsScreen"
        component={AccountDetailsScreen}
        options={{ title: "Account Details" }}
      />
      <AccountStack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{ title: "Help" }}
      />
      <AccountStack.Screen
        name="ManageReviewsScreen"
        component={ManageReviewsScreen}
        options={{ title: "Manage Reviews" }}
      />
      <AccountStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ title: "Notifications" }}
      />
      <AccountStack.Screen
        name="PaymentInfoScreen"
        component={PaymentInfoScreen}
        options={{ title: "Payment Info" }}
      />
    </AccountStack.Navigator>
  );
}
