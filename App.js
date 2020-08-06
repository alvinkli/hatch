import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import UserAuthNav from "./navigation/UserAuthNav";
import MainNav from "./navigation/MainNav";
import Colors from "./constants/Colors";
import restaurantsReducer from "./store/reducers/restaurants";
import authReducer from "./store/reducers/auth";
import * as firebase from "firebase";

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
};

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const MyTheme = {
    dark: false,
    colors: {
      primary: Colors.primary,
      background: "#FFFFFF",
      card: "#FFFFFF",
      text: Colors.primary,
      border: Colors.primary,
    },
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setInitializing(false)}
      />
    );

  if (user === null) {
    return (
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <UserAuthNav />
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <MainNav />
        </NavigationContainer>
      </Provider>
    );
  }
}
