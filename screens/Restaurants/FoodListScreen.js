import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Divider from "../../components/Divider";
import PriceButton from "../../components/PriceButton";
import AppText from "../../components/AppText";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

import firebase from "./../../firebase";

const FoodListScreen = (props) => {
  const [menuData, setMenuData] = useState([]);

  const getData = async () => {
    const snapshot = await firebase
      .firestore()
      .collection("restaurants")
      .doc(props.route.params.key)
      .collection("menu")
      .where("category", "array-contains", props.route.params.category)
      .get();
    setMenuData(
      snapshot.docs.map((doc) => {
        const obj = doc.data();
        obj.key = doc.id;
        console.log(obj);
        return obj;
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

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
        <AppText text={props.route.params.category} padding medium />
      </View>
      <Divider />
      <FlatList data={menuData} renderItem={renderSection} />
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
