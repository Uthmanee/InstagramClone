import { Formik } from "formik";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import Validator from "email-validator";

import AppInput from "./AppInput";
import SubmitButton from "./SubmitButton";
import AppText from "../AppText";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("An email is required.").email().label("Email"),
  username: Yup.string()
    .required("A username is required")
    .min(2, "Username should be at lease 2 characters")
    .label("Username"),
  password: Yup.string()
    .required()
    .min(6, "Your password should have at least 6 length of characters")
    .label("password"),
});

function SignUpForm(props) {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      validateOnMount={true}
      validationSchema={validationSchema}
    >
      {({ handleChange, values }) => (
        <>
          <AppInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            placeholder="Email"
            placeholderTextColor="#444"
            style={{
              borderColor:
                values.email.length < 1 || Validator.validate(values.email)
                  ? "#ccc"
                  : "red",
            }}
            textContentType="emailAddress"
            value={values.email}
          />
          <AppInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleChange("username")}
            placeholder="Username"
            placeholderTextColor="#444"
            style={{
              borderColor:
                values.username.length < 1 || values.username.length >= 2
                  ? "#ccc"
                  : "red",
            }}
            textContentType="emailAddress"
            value={values.email}
          />
          <AppInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleChange("password")}
            placeholder="Password"
            placeholderTextColor="#444"
            secureTextEntry={true}
            style={{
              borderColor:
                values.password.length < 1 || values.password.length >= 6
                  ? "#ccc"
                  : "red",
            }}
            textContentType="password"
            value={values.password}
          />
          <SubmitButton style={styles.button} title="Sign Up" />
          <View style={styles.actionContainer}>
            <AppText color="#444">Already have an account</AppText>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AppText color="#6BB0f5"> Log In</AppText>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginTop: 40,
    marginBottom: 50,
  },
  container: {},
});

export default SignUpForm;
