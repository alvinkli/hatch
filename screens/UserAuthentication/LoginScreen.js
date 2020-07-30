import React, { useReducer, useCallback, useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import LargeButton from "../../components/LargeButton";
import Logo from "../../components/Logo";
import AppText from "../../components/AppText";
import Colors from "../../constants/Colors";
import CloseButton from "../../components/CloseButton";
import * as authActions from "../../store/actions/auth";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const LoginScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("Login Error", error, [{ text: "Try Again" }]);
    }
  }, [error]);

  const loginHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(
        authActions.login(
          formState.inputValues.email,
          formState.inputValues.password
        )
      );
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView behavior="position">
      <ScrollView scrollEnabled={false}>
        <SafeAreaView>
          <View>
            <CloseButton
              onPress={() => props.navigation.navigate("UserAuthScreen")}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 12,
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
              id="email"
              placeholder="Email"
              keyboardType="email-address"
              required
              errorMessage="Please enter a valid email."
              onInputChange={inputChangeHandler}
              autoCapitalize="none"
              email
            />
            <Input
              id="password"
              placeholder="Password"
              keyboardType="default"
              required
              errorMessage="Please enter a valid password."
              onInputChange={inputChangeHandler}
              autoCapitalize="none"
              secureTextEntry
              minLength={8}
            />
            {isLoading ? (
              <ActivityIndicator
                size="large"
                color={Colors.primary}
                marginTop={16}
              />
            ) : (
              <LargeButton text="Login" onPress={loginHandler} />
            )}
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate("SignUpScreen")}
            >
              <View>
                <AppText
                  style={{
                    marginTop: 12,
                    height: 32,
                    marginLeft: "9%",
                    color: Colors.secondary,
                  }}
                  text="First time on Hatch? Sign up here"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={{ height: 20 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
