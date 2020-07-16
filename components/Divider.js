import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";

const Divider = (props) => {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderTopColor: Colors.divider,
      }}
    />
  );
};

export default Divider;
