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
      <View style={styles.section}>
        <AppText text="Most Popular" style={styles.header} />
        <FlatList
          data={restaurantData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => renderRestaurantCards(item)}
          style={styles.horizontalScroll}
        />
      </View>
      <Divider />
      <View style={styles.section}>
        <AppText text="Nearby" style={styles.header} />
        <FlatList
          data={restaurantData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => renderRestaurantCards(item)}
          style={styles.horizontalScroll}
        />
      </View>
      <Divider />
      <View style={styles.section}>
        <AppText text="Newly Added" style={styles.header} />
        <FlatList
          data={restaurantData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => renderRestaurantCards(item)}
          style={styles.horizontalScroll}
        />
        <Divider />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  horizontalScroll: { height: 150, marginBottom: 30 },
  header: { marginBottom: 15, marginTop: 15 },
  section: { marginLeft: 10 },
});

export default BrowseRestaurantsScreen;
