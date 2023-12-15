import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Story from "./Story";
import Users from "../../data/Users";

function Stories(props) {
  return (
    <View style={{ marginBottom: 13 }}>
      <FlatList
        data={Users}
        horizontal
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => {
          return <Story image={item.image} username={item.user} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Stories;
