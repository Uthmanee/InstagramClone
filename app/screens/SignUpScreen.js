import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import SignUpForm from "../components/form/SignUpForm";

function SignUpScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/InstagramLogo.png")}
        />
      </View>
      <SignUpForm />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 12,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 80,
  },
});

export default SignUpScreen;
