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
      //backgroundColor: props.accent ? Colors.secondary : Colors.primary,
      backgroundColor: "white",
<<<<<<< HEAD
      borderColor: "#EEEEEE",
=======
      borderColor: "#555555",
>>>>>>> e7a2e763566f9e504c570fd38601809d81399ccb
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
