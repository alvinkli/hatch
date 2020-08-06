import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from "react-native";
import AppText from "./AppText";
import Colors from "../constants/Colors";

const Card = (props) => {
  styles = StyleSheet.create({
    photo: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      width: 300,
      height: 144,
    },
    text: {
      padding: 8,
      paddingStart: 12,
      marginBottom: 15,
      /*borderBottomWidth: 0.2,
      borderRightWidth: 0.2,
      borderLeftWidth: 0.2,*/
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderColor: "#000000",
      backgroundColor: "#EEEEEE",
    },
    container: {
      shadowColor: "#111111",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 4,
      textAlign: "left",
      marginLeft: 20,
      height: 180,
      flexDirection: "column",
      flex: 1,
      justifyContent: "space-between",
      marginTop: 16,
      marginBottom: 16,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={
            props.image
              ? { uri: props.image }
              : require("../assets/default.jpeg")
          }
        />
        <View style={styles.text}>
          <AppText
            text={props.restaurantName + " (" + props.location + ")"}
            style={{ color: "black", fontFamily: "Montserrat-Regular" }}
            small
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
