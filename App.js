import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import MainNav from "./navigation/MainNav";
import Colors from "./constants/Colors";
import restaurantsReducer from "./store/reducers/restaurants";

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

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

  if (!isLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setIsLoaded(true)} />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <MainNav />
      </NavigationContainer>
    </Provider>
  );

  /*return (
      <NavigationContainer theme={MyTheme}>
        <UserAuthNav login={login} />
      </NavigationContainer>
    );*/
}
