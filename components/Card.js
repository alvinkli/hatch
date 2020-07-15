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
        <Image style={styles.photo} source={{ uri: props.image }} />
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
  photo: { borderRadius: 15, height: "25%", width: "60%" },
  text: { margin: 5 },
  container: {
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { widght: 0, height: 2 },
    shadowRadius: 2,
  },
});

export default Card;
