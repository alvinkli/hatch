import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = (props) => {
  return (
    <Button title="Login" onPress={() => props.navigation.replace("Home")} />
  );
};

export default LoginScreen;
