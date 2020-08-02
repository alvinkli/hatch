import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Divider from "../../components/Divider";
import ArrowButton from "../../components/ArrowButton";
import AppText from "../../components/AppText";
import Input from "../../components/Input";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const RestaurantMenuScreen = (props) => {
  const sectionsData = ["Small Plates", "Drinks", "Main Course", "Dessert"];

  const renderSection = (itemData) => {
    return (
      <ArrowButton
        text={itemData.item}
        accent
        onPress={() =>
          props.navigation.navigate("FoodListScreen", {
            catagory: itemData.item,
          })
        }
      />
    );
  };

  return (
    <View>
      <Image
        style={styles.headerImage}
        source={
          props.image
            ? { uri: props.image }
            : require("../../assets/default.jpeg")
        }
      />
      {/*<AppText text={props.route.params.key} small />*/}
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Ionicons name="ios-navigate" style={styles.icon}></Ionicons>
            <AppText text="Location" small />
          </View>
        </View>
        <View style={[styles.info, { borderRightWidth: 0 }]}>
          <View style={styles.infoText}>
            <Ionicons name="ios-stopwatch" style={styles.icon}></Ionicons>
            <AppText text="Find a Table" small />
          </View>
        </View>
      </View>
      <View>
        <AppText text="Menu" padding medium />
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

export default RestaurantMenuScreen;
