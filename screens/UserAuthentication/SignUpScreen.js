import React from "react";
import { View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import Input from "../../components/Input";
import LargeButton from "../../components/LargeButton";
import Logo from "../../components/Logo";
import AppText from "../../components/AppText";
import Colors from "../../constants/Colors";

const SignUpScreen = (props) => {
  const { login } = props.route.params;
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="position">
        <View
          style={{
            alignItems: "center",
            paddingTop: 32,
          }}
        >
          <Logo />
          <AppText
            text="HATCH"
            bold={true}
            style={{ fontSize: 48, color: Colors.primary }}
          />
        </View>
        <View style={{ paddingTop: 32 }}>
          <AppText
            text="Create An Account"
            medium={true}
            style={{ marginLeft: "10%" }}
          />
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <LargeButton
            text="Sign Up"
            onPress={() => props.navigation.navigate("LoginScreen")}
          />
        </View>
        <View style={{ height: 20 }} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
