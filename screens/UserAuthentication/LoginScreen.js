import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = (props) => {
  return <Button title="Login" onPress={() => props.setIsLoggedIn(true)} />;
};

export default LoginScreen;
