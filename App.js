import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Carson with a y is better. YESSSSSSS. She is.</Text>
        <Text>I need a biddie</Text>
        <Text>Hello</Text>
        <Text>Hi</Text>
        <Text>Newport Blows</Text>
        <Text>Norcal is elite</Text>
      </View>
      <Text>Carson with a a is better</Text>
      <Text>Carson with a i is better</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
