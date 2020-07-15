import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import Card from "../../components/Card";

const BrowseRestaurantsScreen = (props) => {
  const restaurantData = [
    {
      name: "BurgerPlace",
      distance: "0.5",
      image: require("../../assets/burger.jpeg"),
    },
    {
      name: "SandwichPlace",
      distance: "0.8",
      image: require("../../assets/pasta.jpg"),
    },
    {
      name: "PastaPlace",
      distance: "0.3",
      image: require("../../assets/burger.jpeg"),
    },
  ];

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
    <SafeAreaView>
      <FlatList
        data={restaurantData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => renderRestaurantCards(item)}
      />
    </SafeAreaView>
  );
};

export default BrowseRestaurantsScreen;
