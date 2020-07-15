import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

const LargeButton = (props) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: 48,
      width: "80%",
      marginLeft: "10%",
      marginTop: 10,
      marginTop: 10,
      backgroundColor: props.accent ? Colors.secondary : Colors.primary,
      borderRadius: 16,
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <AppText text={props.text} style={{ color: "#FFFFFF", fontSize: 18 }} />
    </TouchableOpacity>
  );
};

export default LargeButton;
