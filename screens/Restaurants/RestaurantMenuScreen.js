import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Divider from "../../components/Divider";
import ArrowButton from "../../components/ArrowButton";
import AppText from "../../components/AppText";
import LargeButton from "../../components/LargeButton";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import firebase from "./../../firebase";

const RestaurantMenuScreen = (props) => {
  const [catagoriesData, setCatagoriesData] = useState([]);

  const getData = async () => {
    const snapshot = await firebase
      .firestore()
      .collection("restaurants")
      .doc(props.route.params.key)
      .get();
    setCatagoriesData(
      snapshot.data().catagories.map((catagory, index) => {
        return { name: catagory, key: index.toString() };
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  styles = StyleSheet.create({
    headerImage: {
      width: "100%",
      height: 160,
    },
    infoContainer: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: Colors.divider,
    },
    info: {
      flex: 1,
      borderRightWidth: 1,
      borderRightColor: Colors.divider,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    icon: {
      fontSize: 24,
      paddingEnd: 8,
      color: Colors.secondary,
    },
    infoText: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 4,
    },
  });

  const renderSection = (itemData) => {
    return (
      <ArrowButton
        text={itemData.item.name}
        accent
        onPress={() =>
          props.navigation.navigate("FoodListScreen", {
            key: props.route.params.key,
            category: itemData.item.name,
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
          props.route.params.image
            ? { uri: props.route.params.image }
            : require("../../assets/default.jpeg")
        }
      />
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Ionicons name="ios-navigate" style={styles.icon}></Ionicons>
            <AppText
              text="Location"
              small
              style={{ color: Colors.secondary }}
            />
          </View>
        </View>
        <View style={[styles.info, { borderRightWidth: 0 }]}>
          <View style={styles.infoText}>
            <Ionicons name="ios-stopwatch" style={styles.icon}></Ionicons>
            <AppText
              text="Find a Table"
              small
              style={{ color: Colors.secondary }}
            />
          </View>
        </View>
      </View>
      <View>
        <AppText text="Menu" padding medium />
      </View>
      <Divider />
      <FlatList data={catagoriesData} renderItem={renderSection} />
    </View>
  );
};

export default RestaurantMenuScreen;
