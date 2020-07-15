import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import Card from "../../components/Card";

const BrowseRestaurantsScreen = (props) => {
  const restaurantData = [
    {
      name: "BurgerPlace",
      distance: "0.5",
      image: "../assets/burger.jpeg",
    },
    {
      name: "SandwichPlace",
      distance: "0.8",
      image: "../assets/burger.jpeg",
    },
    {
      name: "PastaPlace",
      distance: "0.3",
      image: "../assets/burger.jpeg",
    },
  ];

  const renderRestaurantCards = (item) => {
    console.log(item);
    return (
      <Card
        onSelect={() => props.navigation.navigate("RestaurantMenuScreen")}
        restaurantName={item.name}
        restaurantDistance={item.distance}
        image={item.image}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={restaurantData}
        horizontal={true}
        renderItem={(item) => renderRestaurantCards(item)}
      />
    </SafeAreaView>
  );
};

export default BrowseRestaurantsScreen;
