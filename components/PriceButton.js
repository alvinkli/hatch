import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

const PriceButton = (props) => {
  const styles = StyleSheet.create({
    button: {
      height: 64,
      paddingStart: 24,
      paddingEnd: 24,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: Colors.divider,
    },
    arrow: {
      fontSize: 20,
      color: props.accent ? Colors.primary : Colors.text,
    },
  });
  return (
    <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
      <View style={styles.button}>
        <AppText text={props.text} accent={props.accent} />
        <AppText text={"$" + props.price} accent={!props.accent} />
      </View>
    </TouchableHighlight>
  );
};

export default PriceButton;
