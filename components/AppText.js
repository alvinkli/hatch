import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const AppText = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: props.accent ? Colors.primary : Colors.text,
      fontSize: props.large ? 40 : props.small ? 12 : props.medium ? 24 : 16,
      fontFamily: props.bold ? "Montserrat-Bold" : "Montserrat-Regular",
    },
  });
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
};

export default AppText;
