import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: "84%",
    marginLeft: "8%",
    marginTop: 16,
    borderRadius: 16,
    padding: 10,
    fontSize: 16,
  },
});
export default Input;
