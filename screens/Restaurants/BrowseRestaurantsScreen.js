import React from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import Card from "../../components/Card";
import Divider from "../../components/Divider";
import AppText from "../../components/AppText";

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
    <ScrollView>
      <View>
        <AppText text="Most Popular" style={styles.header} />
        <FlatList
          data={restaurantData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => renderRestaurantCards(item)}
        />
      </View>
      <Divider />
      <View>
        <AppText text="Nearby" style={styles.header} />
        <FlatList
          data={restaurantData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => renderRestaurantCards(item)}
        />
      </View>
      <Divider />
      <View>
        <AppText text="Newly Added" style={styles.header} />
        <FlatList
          data={restaurantData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => renderRestaurantCards(item)}
        />
        <Divider />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: { margin: 15 },
});

export default BrowseRestaurantsScreen;
