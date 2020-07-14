import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const AppText = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: Colors.text,
      fontSize: 16,
      fontFamily: "Montserrat-Regular",
    },
  });
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
};

export default AppText;
