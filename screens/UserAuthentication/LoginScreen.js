import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import Input from "../../components/Input";
import LargeButton from "../../components/LargeButton";

const LoginScreen = (props) => {
  const { login } = props.route.params;
  return (
    <SafeAreaView>
      <Button title="Login" onPress={login} />
    </SafeAreaView>
  );
};

export default LoginScreen;
