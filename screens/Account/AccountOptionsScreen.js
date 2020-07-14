import React from "react";
import { ScrollView } from "react-native";
import ArrowButton from "../../components/ArrowButton";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AccountOptionsScreen = (props) => {
  return (
    <ScrollView style={{ flex: 1, flexDirection: "column" }}>
      <ArrowButton
        text="Account Details"
        onPress={() => props.navigation.navigate("AccountDetailsScreen")}
      />
      <ArrowButton
        text="Payment Info"
        onPress={() => props.navigation.navigate("PaymentInfoScreen")}
      />
      <ArrowButton
        text="Manage Reviews"
        onPress={() => props.navigation.navigate("ManageReviewsScreen")}
      />
      <ArrowButton
        text="Notifications"
        onPress={() => props.navigation.navigate("NotificationsScreen")}
      />
      <ArrowButton
        text="Help"
        onPress={() => props.navigation.navigate("HelpScreen")}
      />
      <ArrowButton text="Logout" accent={true} />
    </ScrollView>
  );
};

export default AccountOptionsScreen;
