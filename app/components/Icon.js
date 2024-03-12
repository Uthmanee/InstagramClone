import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Icon({ dimension, icon, onPress = () => {}, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={[style, { height: dimension, width: dimension }]}
        source={{ uri: icon }}
      />
    </TouchableOpacity>
  );
}

export default Icon;
