import React from "react";
import { View, Text, Button } from "react-native";
import LargeButton from "../../components/LargeButton";
import AppText from "../../components/AppText";
import Colors from "../../constants/Colors";

const UserAuthScreen = (props) => {
  return (
    <View
      style={{ flexDirection: "column", flex: 1, justifyContent: "center" }}
    >
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppText
          text="HATCH"
          bold={true}
          style={{ fontSize: 48, color: Colors.primary }}
        />
      </View>
      <View
        style={{ flexDirection: "column", flex: 1, justifyContent: "center" }}
      >
        <LargeButton
          text="Sign Up"
          onPress={() => props.navigation.navigate("SignUpScreen")}
        />
        <LargeButton
          text="Login"
          accent={true}
          onPress={() => props.navigation.navigate("LoginScreen")}
        />
      </View>
    </View>
  );
};

export default UserAuthScreen;
