import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

import AppInput from "./AppInput";
import AppText from "../AppText";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SubmitButton from "./SubmitButton";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LogInForm(props) {
  const navigation = useNavigation();

  const onLogin = async (email, password) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      console.log("Login Successful");
    } catch (error) {
      // Alert.alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        onLogin(values.email, values.password);
      }}
      validationSchema={validationSchema}
      validateOnMount
    >
      {({ handleChange, values }) => (
        <>
          <AppInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="email-address"
            onChangeText={handleChange("email")}
            placeholder="Phone number, username or email"
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
          <View>
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
          </View>
          <View style={styles.forgotPasswordContainer}>
            <AppText color="#6BB0f5">Forgot password?</AppText>
          </View>
          <SubmitButton style={styles.button} title="Log In" />
          <View style={styles.signUpContainer}>
            <AppText color="#444">Don't have an account? </AppText>
            <TouchableOpacity onPress={() => navigation.push("SignUpScreen")}>
              <AppText color="#6BB0f5">Sign Up</AppText>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 50,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default LogInForm;
