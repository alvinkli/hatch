import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: "80%",
    marginLeft: "10%",
    marginTop: 10,
    marginTop: 10,
    borderRadius: 16,
    padding: 10,
    fontSize: 24,
  },
});
export default Input;
