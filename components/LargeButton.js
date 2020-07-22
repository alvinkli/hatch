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
      marginTop: 16,
      //backgroundColor: props.accent ? Colors.secondary : Colors.primary,
      backgroundColor: "white",
      borderColor: "#555555",
      borderWidth: 1,
      borderRadius: 16,
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowOffset: { widght: 2, height: 2 },
      shadowRadius: 2,
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
