import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";

const Divider = (props) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: props.accent ? Colors.strongDivider : Colors.divider,
      }}
    />
  );
};

export default Divider;
