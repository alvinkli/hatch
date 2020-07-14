import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const LoginScreen = (props) => {
  const { login } = props.route.params;
  return (
    <SafeAreaView>
      <Button title="Login" onPress={login} />
    </SafeAreaView>
  );
};

export default LoginScreen;
