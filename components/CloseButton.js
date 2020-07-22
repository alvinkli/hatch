import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";

const CloseButton = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.button}>
        <AppText text={props.text} accent={props.accent} />
        <Ionicons name="ios-close" style={styles.close}></Ionicons>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 34,
    paddingStart: 24,
    paddingEnd: 24,
  },
  close: {
    fontSize: 44,
    color: "#555555",
  },
});

export default CloseButton;
