import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";

const ArrowButton = (props) => {
  const styles = StyleSheet.create({
    button: {
      height: 52,
      paddingStart: 24,
      paddingEnd: 24,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    arrow: {
      fontSize: 20,
      color: props.accent ? Colors.primaryColor : Colors.text,
    },
  });
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.button}>
        <AppText text={props.text} accent={props.accent} />
        <Ionicons name="md-arrow-forward" style={styles.arrow}></Ionicons>
      </View>
    </TouchableHighlight>
  );
};

export default ArrowButton;
