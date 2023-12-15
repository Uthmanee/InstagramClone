import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../AppText";

function Story({ image, username }) {
  return (
    <View style={styles.container}>
      <Image style={styles.story} source={image} />
      <AppText>
        {username.length > 5 ? username.slice(0, 7) + "..." : username}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  story: {
    borderColor: "#ff8501",
    borderRadius: 35,
    borderWidth: 3,
    height: 70,
    marginLeft: 6,
    resizeMode: "contain",
    width: 70,
  },
});

export default Story;
