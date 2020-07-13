import React from "react";
import { View, Text, Button } from "react-native";

const AccountOptionsScreen = (props) => {
  return (
    <View>
      <Button
        title="Account Details"
        onPress={() => props.navigation.navigate("AccountDetailsScreen")}
      />
      <Button
        title="Payment Info"
        onPress={() => props.navigation.navigate("PaymentInfoScreen")}
      />
      <Button
        title="Manage Reviews"
        onPress={() => props.navigation.navigate("ManageReviewsScreen")}
      />
      <Button
        title="Notifications"
        onPress={() => props.navigation.navigate("NotificationsScreen")}
      />
      <Button
        title="Help"
        onPress={() => props.navigation.navigate("HelpScreen")}
      />
      <Button title="Logout" />
    </View>
  );
};

export default AccountOptionsScreen;
