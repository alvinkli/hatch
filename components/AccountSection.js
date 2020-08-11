import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";
import Input from "./Input";

const AccountSection = (props) => {
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 18,
      paddingStart: 16,
      paddingEnd: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: Colors.divider,
    },
  });
  if (props.notTouchable) {
    return (
      <View style={styles.button}>
        <View>
          <AppText text={props.leftText} accent={props.accent} bold />
        </View>
        <View>
          <AppText text={props.rightText} accent={props.accent} />
        </View>
      </View>
    );
  } else {
    return (
      <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
        <View style={styles.button}>
          <View>
            <AppText text={props.leftText} accent={props.accent} bold />
          </View>
          <View>
            {/* <AppText text={props.rightText} accent={props.accent} /> */}
            <Input plain {...props} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
};

export default AccountSection;
