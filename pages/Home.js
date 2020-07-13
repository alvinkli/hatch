import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsScreen from "./Restaurants/Restaurants";
import OrdersScreen from "./Orders/Orders";
import AccountScreen from "./Account/Account";

const Tab = createBottomTabNavigator();

const HomeScreen = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
