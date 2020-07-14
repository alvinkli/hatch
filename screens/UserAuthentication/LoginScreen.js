import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = (props) => {
  const { login } = props.route.params;
  return <Button title="Login" onPress={login} />;
};

export default LoginScreen;
