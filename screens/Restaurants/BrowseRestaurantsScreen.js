import React from "react";
import { FlatList, View } from "react-native";

import Divider from "../../components/Divider";
import RestaurantsSection from "../../components/RestaurantsSection";

import firebase from "./../../firebase";

const BrowseRestaurantsScreen = (props) => {
  const db = firebase.firestore();
  const user = firestore().collection("Users").doc("ABC").get();
  console.log(user);

  const sectionsData = [
    {
      key: "1",
      name: "Popular",
      restaurants: restaurantsData.filter(
        (restaurant) => restaurant.rating >= 4.0
      ),
    },
    {
      key: "2",
      name: "Nearby",
      restaurants: restaurantsData.filter(
        (restaurant) => restaurant.distance < 1
      ),
    },
    {
      key: "3",
      name: "Newly Added",
      restaurants: restaurantsData,
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
