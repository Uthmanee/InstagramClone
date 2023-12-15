import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "../Icon";

// Messenger https://img.icons8.com/ios/50/FFFFFF/facebook-messenger--v1.png
// New Post  https://img.icons8.com/material-outlined/48/FFFFFF/filled-plus-2-math.png
// Heart    https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/FFFFFF/external-line-wedding-tanah-basah-basic-outline-tanah-basah-24.png

function Header(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/logo_white.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Icon
          style={styles.icon}
          dimension={30}
          icon="https://img.icons8.com/material-outlined/48/FFFFFF/filled-plus-2-math.png"
          onPress={() => navigation.navigate("NewPost")}
        />
        <Icon
          style={styles.icon}
          dimension={30}
          icon="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/FFFFFF/external-line-wedding-tanah-basah-basic-outline-tanah-basah-24.png"
        />
        <View>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Icon
            style={styles.icon}
            dimension={30}
            icon="https://img.icons8.com/material-outlined/48/FFFFFF/facebook-messenger--v1.png"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  icon: {
    marginLeft: 10,
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    height: 50,
    resizeMode: "contain",
    width: 100,
  },
  unreadBadge: {
    alignItems: "center",
    backgroundColor: "#FF3250",
    bottom: 23,
    borderRadius: 25,
    height: 18,
    justifyContent: "center",
    left: 23,
    position: "absolute",
    width: 25,
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default Header;
