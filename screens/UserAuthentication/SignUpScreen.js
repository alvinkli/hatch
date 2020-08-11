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
import * as firebase from "firebase";
//import * as authActions from "../../store/actions/auth";

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

const SignUpScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  //const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    inputValidities: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("Sign up Error", error, [{ text: "Try Again" }]);
    }
  }, [error]);

  const signupHandler = () => {
    setError(null);
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        formState.inputValues.email,
        formState.inputValues.password
      )
      .then(() => {
        // firebase
        //   .auth()
        //   .currentUser.updateProfile({
        //     displayName:
        //       formState.inputValues.firstName +
        //       " " +
        //       formState.inputValues.lastName,
        //   })
        //   .then(() => {
        //     console.log("User profile updated!");
        //   })
        //   .catch(() => {
        //     console.log("There was an error");
        //   });
        firebase
          .firestore()
          .collection("users")
          .add({
            firstName: formState.inputValues.firstName,
            lastName: formState.inputValues.lastName,
            //phoneNumber: formState.inputValues.phoneNumber
          })
          .then(() => {
            console.log("User added to database!");
          });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setError("Email Already In Use!");
        }
        if (err.code === "auth/invalid-email") {
          setError("Invalid Email!");
        }
        setIsLoading(false);
      });
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
              text="Create An Account"
              medium={true}
              style={{ marginLeft: "9%" }}
            />
            <Input
              id="firstName"
              placeholder="First Name"
              keyboardType="default"
              required
              errorMessage="Please enter your first name"
              onInputChange={inputChangeHandler}
            />
            <Input
              id="lastName"
              placeholder="Last Name"
              keyboardType="default"
              required
              errorMessage="Please enter your last name"
              onInputChange={inputChangeHandler}
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
              errorMessage="Password must be at least 8 characters"
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
              <LargeButton text="Sign Up" onPress={signupHandler} />
            )}
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate("LoginScreen")}
            >
              <View>
                <AppText
                  style={{
                    marginTop: 12,
                    height: 32,
                    marginLeft: "9%",
                    color: Colors.secondary,
                  }}
                  text="Already have an account? Sign in here"
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

export default SignUpScreen;
