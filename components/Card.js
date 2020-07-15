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
    <TouchableWithoutFeedback onPress={props.onSelect}>
      <View style={styles.container}>
        <Image style={styles.photo} source={props.image} />
        <AppText
          style={styles.text}
          accent={false}
          text={props.restaurantName + " (" + props.restaurantDistance + " mi)"}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

styles = StyleSheet.create({
  photo: { borderRadius: 15, height: "95%", width: 300 },
  text: { marginTop: 10 },
  container: {
    margin: 6,
    height: "50%",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { widght: 0, height: 2 },
    shadowRadius: 2,
    textAlign: "left",
  },
});

export default Card;
