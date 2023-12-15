import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

function AppInput({ style, ...otherProps }) {
  return (
    <View style={[styles.inputFieldContainer, style]}>
      <TextInput {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputFieldContainer: {
    backgroundColor: "#FAFAFA",
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
  },
});

export default AppInput;
