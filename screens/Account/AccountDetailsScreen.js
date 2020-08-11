import React from "react";
import { ScrollView } from "react-native";
import AccountSection from "../../components/AccountSection";
import * as firebase from "firebase";

const AccountDetailsScreen = (props) => {
  const handleChangeName = () => {};

  user = firebase.auth().currentUser;
  return (
    <ScrollView style={{ flex: 1, flexDirection: "column" }}>
      <AccountSection
        leftText="Name"
        rightText={user.displayName}
        onPress={() => {}}
        notTouchable
      />
      <AccountSection
        leftText="Email"
        rightText={user.email}
        onPress={() => {}}
        notTouchable
      />
    </ScrollView>
  );
};

export default AccountDetailsScreen;
