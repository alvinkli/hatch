import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const AppText = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: props.accent ? Colors.primary : Colors.text,
      fontSize: props.large ? 40 : props.small ? 12 : props.medium ? 20 : 16,
      fontFamily: props.bold ? "Montserrat-Bold" : "Montserrat-Regular",
      marginLeft: props.padding ? 16 : 0,
      marginTop: props.padding ? 16 : 0,
      marginBottom: props.padding ? 16 : 0,
    },
  });
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
};

export default AppText;
