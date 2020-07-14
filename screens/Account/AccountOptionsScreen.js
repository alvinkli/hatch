import React from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../../components/AppText";

const AccountOptionsScreen = (props) => {
  return (
    <ScrollView style={{ flex: 1, flexDirection: "column" }}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("AccountDetailsScreen")}
        style={styles.button}
      >
        <AppText text="Account Details" />
        <Ionicons name="md-arrow-forward" style={styles.arrow}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PaymentInfoScreen")}
        style={styles.button}
      >
        <AppText text="Payment Info" />
        <Ionicons name="md-arrow-forward" style={styles.arrow}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ManageReviewsScreen")}
        style={styles.button}
      >
        <AppText text="Manage Reviews" />
        <Ionicons name="md-arrow-forward" style={styles.arrow}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("NotificationsScreen")}
        style={styles.button}
      >
        <AppText text="Notifications" />
        <Ionicons name="md-arrow-forward" style={styles.arrow}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("HelpScreen")}
        style={styles.button}
      >
        <AppText text="Help" />
        <Ionicons name="md-arrow-forward" style={styles.arrow}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AppText text="Logout" style={{ color: Colors.primaryColor }} />
        <Ionicons name="md-arrow-forward" style={styles.logoutArrow}></Ionicons>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 52,
    paddingStart: 24,
    paddingEnd: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrow: {
    fontSize: 20,
    color: Colors.text,
  },
  logoutArrow: {
    fontSize: 20,
    color: Colors.primaryColor,
  },
});

export default AccountOptionsScreen;
