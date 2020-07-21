import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Divider from "../../components/Divider";
import RestaurantsSection from "../../components/RestaurantsSection";
import * as restaurantActions from "../../store/actions/restaurants";

const BrowseRestaurantsScreen = (props) => {
  const restaurantsData = useSelector(
    (state) => state.restaurants.restaurantsData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantActions.fetchRestaurants());
  }, [dispatch]);

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
