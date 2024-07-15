import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import BottomTab from "../components/home/BottomTab";
import { bottomTabIcons } from "../components/home/BottomTab";
import { db, firebase } from "../db/firebase";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Screen from "../components/Screen";
import Stories from "../components/home/Stories";

function HomeScreen(props) {
  const [posts, setPosts] = useState(null);
  const [userState, setUserState] = useState(null);
  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) =>
        user ? setUserState(user) : setUserState(null)
      );
    const unsubscribe = db.collectionGroup("posts").onSnapshot(
      (snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      },
      (error) => {
        console.error("Error fetching post data:", error);
      }
    );
    return () => unsubscribe();
  }, [userState]);
  return (
    <Screen style={styles.container}>
      <Header />
      <Stories />
      <View style={{ paddingBottom: 20, flex: 1 }}>
        <FlatList
          data={posts}
          keyExtractor={(user) => user.id}
          renderItem={({ item }) => (
            <Post
              caption={item.caption}
              comments={item.comments}
              id={item.id}
              likes_by_users={item.likes_by_users}
              owner_email={item.owner_email}
              postImageUrl={item.imageUrl}
              profilePicture={item.profile_picture}
              user={item.user}
            />
          )}
        />
      </View>
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
