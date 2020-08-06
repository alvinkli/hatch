import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import Divider from "../../components/Divider";
import RestaurantsSection from "../../components/RestaurantsSection";

import firebase from "./../../firebase";

const BrowseRestaurantsScreen = (props) => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  const getData = async () => {
    const snapshot = await firebase.firestore().collection("restaurants").get();
    setRestaurantsData(
      snapshot.docs.map((doc) => {
        const obj = doc.data();
        obj.key = doc.id;
        return obj;
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

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
