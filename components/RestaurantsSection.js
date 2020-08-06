import React from "react";
import { View, FlatList } from "react-native";
import Card from "../components/Card";
import AppText from "../components/AppText";

const RestaurantsSection = (props) => {
  const renderRestaurantCards = (itemData) => {
    return (
      <Card
        onPress={() =>
          props.navigation.navigate("RestaurantMenuScreen", {
            key: itemData.item.key,
            image: itemData.item.image,
          })
        }
        restaurantName={itemData.item.name}
        location={itemData.item.location}
        image={itemData.item.image}
      />
    );
  };

  return (
    <View>
      <AppText text={props.title} padding />
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
