import React from "react";
import { FlatList } from "react-native";
import Card from "../../components/Card";

const BrowseRestaurantsScreen = (props) => {
  const renderRestaurantCards = (item) => {
    return (
      <Card
        onSelect={() => props.navigation.navigate("RestaurantMenuScreen")}
        restaurantName="Burger Place"
        restaurantDistance="0.5"
        image="../assets/burger.jpeg"
      />
    );
  };
  return (
    <FlatList
      horizontal={true}
      renderItem={(item) => renderRestaurantCards(item)}
    />
  );
};

export default BrowseRestaurantsScreen;
