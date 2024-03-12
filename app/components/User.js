import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";

function User({ image, username }) {
  return (
    <View style={styles.container}>
      <Image style={styles.userImage} source={{ uri: image }} />
      <AppText style={styles.username}>{username}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  userImage: {
    borderColor: "#ff8501",
    borderRadius: 35,
    borderWidth: 3,
    height: 35,
    marginLeft: 6,
    resizeMode: "contain",
    width: 35,
  },

  username: {
    marginLeft: 5,
  },
});

export default User;
