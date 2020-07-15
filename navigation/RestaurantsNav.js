import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BrowseRestaurantsScreen from "../screens/Restaurants/BrowseRestaurantsScreen";
import RestaurantMenuScreen from "../screens/Restaurants/RestaurantMenuScreen";
import FoodListScreen from "../screens/Restaurants/FoodListScreen";
import SpecificItemScreen from "../screens/Restaurants/SpecificItemScreen";
import CheckOutScreen from "../screens/Restaurants/CheckOutScreen";

const RestaurantsStack = createStackNavigator();

const RestaurantsNav = (props) => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name="BrowseRestaurantsScreen"
        component={BrowseRestaurantsScreen}
        options={{ title: "Browse Restaurants" }}
      />
      <RestaurantsStack.Screen
        name="RestaurantMenuScreen"
        component={RestaurantMenuScreen}
        options={{ title: "Restaurant Menu" }}
      />
      <RestaurantsStack.Screen
        name="FoodListScreen"
        component={FoodListScreen}
        options={{ title: "Food List" }}
      />
      <RestaurantsStack.Screen
        name="SpecificItemScreen"
        component={SpecificItemScreen}
        options={{ title: "Specific Item" }}
      />
      <RestaurantsStack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{ title: "Check Out" }}
      />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNav;
