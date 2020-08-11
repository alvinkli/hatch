import React, { useReducer, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false,
  });

  useEffect(() => {
    if (inputState.touched) {
      props.onInputChange(props.id, inputState.value, inputState.isValid);
    }
  }, [inputState, props.onInputChange, props.id]);

  const textChangeHandler = (text) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  if (props.plain) {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={inputState.value}
          onChangeText={textChangeHandler}
          onBlur={lostFocusHandler}
          {...props}
        />
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputState.value}
            onChangeText={textChangeHandler}
            onBlur={lostFocusHandler}
            {...props}
          />
        </View>
        {!inputState.isValid && inputState.touched && (
          <View style={styles.errorContainer}>
            <AppText text={props.errorMessage} />
          </View>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: "84%",
    borderRadius: 5,
    paddingStart: 16,
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  errorContainer: {
    marginLeft: "9%",
  },
});

export default Input;
