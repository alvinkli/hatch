import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RestaurantsNav from "./RestaurantsNav";
import OrdersNav from "./OrdersNav";
import AccountNav from "./AccountNav";

const Tab = createBottomTabNavigator();

const MainNav = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Restaurants") {
            iconName = "ios-restaurant";
          } else if (route.name === "Orders") {
            iconName = "ios-list";
          } else if (route.name === "Account") {
            iconName = "ios-person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="RestaurantsNav" component={RestaurantsNav} />
      <Tab.Screen name="OrdersNav" component={OrdersNav} />
      <Tab.Screen name="AccountNav" component={AccountNav} />
    </Tab.Navigator>
  );
};

export default MainNav;
