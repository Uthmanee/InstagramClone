import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import LogInForm from "../components/form/LogInForm";

function LogInScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/InstagramLogo.png")}
          style={styles.logo}
        />
      </View>
      <LogInForm />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 50,
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

export default LogInScreen;
