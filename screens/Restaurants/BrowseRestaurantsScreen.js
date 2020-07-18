import React from "react";
import { FlatList, View } from "react-native";

import Divider from "../../components/Divider";
import RestaurantsSection from "../../components/RestaurantsSection";

import Restaurants from "../../assets/data/restaurants";

const BrowseRestaurantsScreen = (props) => {
  const sectionsData = [
    {
      key: "1",
      name: "Popular",
      restaurants: Restaurants.popular,
    },
    {
      key: "2",
      name: "Nearby",
      restaurants: Restaurants.nearby,
    },
    {
      key: "3",
      name: "Newly Added",
      restaurants: Restaurants.newlyAdded,
    },
  ];

  const renderSection = (itemData) => {
    return (
      <View>
        <RestaurantsSection
          title={itemData.item.name}
          restaurants={itemData.item.restaurants}
          navigation={props.navigation}
        />
        <Divider />
      </View>
    );
  };

  return <FlatList data={sectionsData} renderItem={renderSection} />;
};

export default BrowseRestaurantsScreen;
