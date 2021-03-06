import React from "react";
import { View } from "react-native";
import LargeButton from "../../components/LargeButton";
import AppText from "../../components/AppText";
import Colors from "../../constants/Colors";
import Logo from "../../components/Logo";
import Plate from "../../components/Plate";

const UserAuthScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          height: 670,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Plate
            style={{
              height: 700,
              position: "absolute",
              top: 0,
            }}
          />
          <Logo />
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
            onPress={() => props.navigation.navigate("LoginScreen")}
            secondary
          />
        </View>
      </View>
    </View>
  );
};

export default UserAuthScreen;
