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
      height: 44,
      width: "84%",
      marginLeft: "8%",
      marginTop: 16,
      backgroundColor: "white",
      borderRadius: 20,
      shadowColor: "#333333",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 4,
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <AppText
        text={props.text}
        style={{
          color: props.accent ? Colors.secondary : Colors.primary,
          fontSize: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default LargeButton;
