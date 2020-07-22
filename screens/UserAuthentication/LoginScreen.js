import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../../components/Input";
import LargeButton from "../../components/LargeButton";
import Logo from "../../components/Logo";
import AppText from "../../components/AppText";
import Colors from "../../constants/Colors";

const LoginScreen = (props) => {
  const { login } = props.route.params;
  return (
    <ScrollView scrollEnabled={false}>
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
              text="Enter Account Info"
              medium={true}
              style={{ marginLeft: "9%" }}
            />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Password" secureTextEntry={true} />
            <LargeButton
              text="Login"
              accent={true}
              onPress={() => props.navigation.navigate("LoginScreen")}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={{ padding: 20 }} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;
