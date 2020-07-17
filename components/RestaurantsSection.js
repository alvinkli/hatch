import React from "react";
import { View, FlatList } from "react-native";
import Card from "../components/Card";
import AppText from "../components/AppText";

const RestaurantsSection = (props) => {
  const renderRestaurantCards = (itemData) => {
    return (
      <Card
        onSelect={() => props.navigation.navigate("RestaurantMenuScreen")}
        restaurantName={itemData.item.name}
        restaurantDistance={itemData.item.distance}
        image={itemData.item.image}
      />
    );
  };

  return (
    <View>
      <AppText text={props.title} style={{ margin: 15 }} />
      <FlatList
        data={props.restaurants}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => renderRestaurantCards(item)}
      />
    </View>
  );
};

export default RestaurantsSection;
