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
  photo: { borderRadius: 15, height: "100%", margin: 7 },
  text: { margin: 5 },
  container: {
    height: "50%",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { widght: 0, height: 2 },
    shadowRadius: 2,
  },
});

export default Card;
