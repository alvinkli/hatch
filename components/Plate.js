import React from "react";
import { Image } from "react-native";

const Plate = (props) => {
  return <Image source={require("../assets/plate.png")} style={props.style} />;
};

export default Plate;
