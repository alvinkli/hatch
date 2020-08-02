import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

const PriceButton = (props) => {
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingStart: 24,
      paddingEnd: 24,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: Colors.divider,
    },
    itemDesc: { flex: 1, paddingEnd: 12 },
  });
  return (
    <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
      <View style={styles.button}>
        <View style={styles.itemDesc}>
          <AppText text={props.text} accent={props.accent} />
          <AppText text={props.description} accent={!props.accent} small />
        </View>
        <AppText text={"$" + props.price} accent={props.accent} />
      </View>
    </TouchableHighlight>
  );
};

export default PriceButton;
