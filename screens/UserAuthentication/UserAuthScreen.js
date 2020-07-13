import React from "react";
import { View, Text, Button } from "react-native";

const UserAuthScreen = (props) => {
  return (
    <View>
      <Button
        title="Sign Up"
        onPress={() => props.navigation.navigate("SignUpScreen")}
      />
      <Button
        title="Login"
        onPress={() => props.navigation.navigate("LoginScreen")}
      />
    </View>
  );
};

export default UserAuthScreen;
