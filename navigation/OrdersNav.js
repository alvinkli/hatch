import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import EditOrderScreen from "../screens/Orders/EditOrderScreen";
import OrdersListScreen from "../screens/Orders/OrdersListScreen";
import ViewOrderScreen from "../screens/Orders/ViewOrderScreen";

const OrdersStack = createStackNavigator();

export default function OrdersNav() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="OrdersListScreen"
        component={OrdersListScreen}
        options={{ title: "Orders" }}
      />
      <OrdersStack.Screen
        name="EditOrderScreen"
        component={EditOrderScreen}
        options={{ title: "Edit Order" }}
      />
      <OrdersStack.Screen
        name="ViewOrderScreen"
        component={ViewOrderScreen}
        options={{ title: "Order Name" }}
      />
    </OrdersStack.Navigator>
  );
}
