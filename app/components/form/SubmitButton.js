import { useFormikContext } from "formik";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

import AppText from "../AppText";

function SubmitButton({ style, title }) {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <Pressable style={[styles.button(isValid), style]} onPress={handleSubmit}>
      <AppText style={styles.buttonText}>{title}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (isValid) => ({
    alignItems: "center",
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    borderRadius: 4,
    justifyContent: "center",
    minHeight: 42,
  }),
  buttonText: {
    fontWeight: 600,
    fontSize: 20,
  },
});

export default SubmitButton;
