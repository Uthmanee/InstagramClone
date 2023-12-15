import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Constants from "expo-constants";

import BottomTab from "../components/home/BottomTab";
import { bottomTabIcons } from "../components/home/BottomTab";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import PostData from "../data/Post";
import Screen from "../components/Screen";
import Stories from "../components/home/Stories";

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Header />
      <Stories />
      <FlatList
        data={PostData}
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => (
          <Post
            caption={item.caption}
            comments={item.Comments}
            likes={item.likes}
            postImageUrl={item.imageUrl}
            profilePicture={item.profile_picture}
            user={item.user}
          />
        )}
      />
      <BottomTab icons={bottomTabIcons} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default HomeScreen;
