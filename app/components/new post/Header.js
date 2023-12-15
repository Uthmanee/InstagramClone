import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import AppText from "../AppText";

function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Chevron onPress={() => navigation.navigate("HomeScreen")} />
      <View style={styles.headerTextContainer}>
        <AppText style={styles.headerText}>NEW POST</AppText>
      </View>
    </View>
  );
}

const Chevron = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Feather color="#fff" name="chevron-left" size={30} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  headerText: {
    fontWeight: 700,
    fontSize: 20,
  },
  headerTextContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Header;
