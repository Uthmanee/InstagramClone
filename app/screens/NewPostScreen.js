import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/new post/Header";
import PostForm from "../components/new post/PostForm";

function NewPostScreen(props) {
  return (
    <Screen style={styles.container}>
      <Header />
      <PostForm />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default NewPostScreen;
