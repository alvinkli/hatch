import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Divider from "../../components/Divider";
import PriceButton from "../../components/PriceButton";
import AppText from "../../components/AppText";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

const FoodListScreen = (props) => {
  const sectionsData = [
    {
      name: "Hamburger",
      desc:
        "A medium-rare hamburger with cheese, tomatoes, lettuce, and onions.",
      price: 8,
    },
    {
      name: "Pasta",
      desc: "Penne pasta served with a tomato sauce and large meatballs.s",
      price: 9,
    },
    { name: "Pizza", desc: "A 12-inch personal pizza with cheese.", price: 12 },
    { name: "Salad", desc: "Chef's salad.", price: 5 },
  ];

  const renderSection = (itemData) => {
    return (
      <PriceButton
        text={itemData.item.name}
        accent
        price={itemData.item.price}
        description={itemData.item.desc}
      />
    );
  };

  return (
    <View>
      <View>
        <AppText text={props.route.params.catagory} padding medium />
      </View>
      <Divider />
      <FlatList data={sectionsData} renderItem={renderSection} />
    </View>
  );
};

styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 160,
  },
  infoContainer: {
    flexDirection: "row",
    paddingTop: 8,
  },
  info: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  icon: {
    fontSize: 24,
    paddingEnd: 8,
  },
  infoText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
  },
});

export default FoodListScreen;
