import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";

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
      backgroundColor: props.outline
        ? "white"
        : props.secondary
        ? Colors.secondary
        : Colors.primary,
      borderRadius: 5,
      borderWidth: props.outline ? 2 : 0,
      borderColor: props.secondary ? Colors.secondary : Colors.primary,
      shadowColor: "#111111",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 4,
    },
    icon: {
      position: "absolute",
      left: 16,
      color: props.outline
        ? props.secondary
          ? Colors.secondary
          : Colors.primary
        : "white",
      fontSize: 24,
    },
  });
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      {props.icon ? (
        <Ionicons name={props.icon} style={styles.icon}></Ionicons>
      ) : null}
      <AppText
        text={props.text}
        style={{
          color: props.outline
            ? props.secondary
              ? Colors.secondary
              : Colors.primary
            : "white",
          fontSize: 18,
          textTransform: "uppercase",
          fontFamily: "Montserrat-Bold",
        }}
      />
    </TouchableOpacity>
  );
};

export default LargeButton;
