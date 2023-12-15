import React from "react";
import { Text } from "react-native";

function AppText({ children, color = "#fff", style }) {
  return <Text style={[style, { color: color }]}>{children}</Text>;
}
export default AppText;
