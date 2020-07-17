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
  return (
    <TouchableWithoutFeedback onPress={props.onSelect}>
      <View style={styles.container}>
        <Image style={styles.photo} source={props.image} />
        <View style={styles.text}>
          <AppText
            accent={false}
            text={
              props.restaurantName + " (" + props.restaurantDistance + " mi)"
            }
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
    shadowOpacity: 0.3,
    shadowOffset: { widght: 0, height: 2 },
    shadowRadius: 2,
    textAlign: "left",
    marginLeft: 10,
    height: 180,
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    margin: 16,
  },
});

export default Card;
