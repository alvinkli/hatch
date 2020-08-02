import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from "react-native";
import AppText from "./AppText";

const Card = (props) => {
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
            accent={false}
            text={props.restaurantName + " (" + props.location + ")"}
            small={true}
            style={{ color: "black" }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

styles = StyleSheet.create({
  photo: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 300,
    height: 144,
  },
  text: {
    padding: 8,
    marginBottom: 15,
    borderBottomWidth: 0.2,
    borderRightWidth: 0.2,
    borderLeftWidth: 0.2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: "#000000",
    backgroundColor: "white",
  },
  container: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { widght: 2, height: 2 },
    shadowRadius: 2,
    textAlign: "left",
    marginLeft: 20,
    height: 180,
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export default Card;
