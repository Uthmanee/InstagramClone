import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "@rneui/base";

import AppText from "../AppText";
import User from "../User";
import RowContainer from "../RowContainer";

import Icon from "../Icon";

function Post({
  caption,
  comments,
  likes,
  postImageUrl,
  profilePicture,
  user,
}) {
  return (
    <View style={styles.postContainer}>
      <Divider width={1} orientation="vertical" />
      <PostHeader profilePicture={profilePicture} user={user} />
      <PostImage postImageUrl={postImageUrl} />
      <PostFooter
        caption={caption}
        comments={comments}
        likes={likes}
        user={user}
      />
    </View>
  );
}

const PostHeader = ({ profilePicture, user }) => {
  return (
    <RowContainer style={styles.headerContainer}>
      <User image={profilePicture} username={user} />
      <AppText style={{ fontWeight: 900 }}>...</AppText>
    </RowContainer>
  );
};

const PostImage = ({ postImageUrl }) => {
  return (
    <View style={styles.postImageContainer}>
      <Image style={styles.postImage} source={postImageUrl} />
    </View>
  );
};

const PostFooter = ({ caption, comments, likes, user }) => {
  return (
    <View style={styles.footer}>
      <RowContainer style={styles.footerContainer}>
        <RowContainer style={styles.leftFooterIcon}>
          <Icon
            dimension={30}
            icon="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/FFFFFF/external-line-wedding-tanah-basah-basic-outline-tanah-basah-24.png"
          />
          <Icon
            dimension={30}
            icon="https://img.icons8.com/external-regular-kawalan-studio/96/FFFFFF/external-chat-chat-regular-kawalan-studio-2.png"
          />
          <Icon
            dimension={30}
            icon="https://img.icons8.com/ios/50/FFFFFF/sent--v1.png"
          />
        </RowContainer>
        <Icon
          dimension={30}
          icon="https://img.icons8.com/ios/50/FFFFFF/bookmark-ribbon--v1.png"
        />
      </RowContainer>
      <Likes likes={likes} />
      <Caption caption={caption} user={user} />
      <CommentSection comments={comments} />
      <Comments comments={comments} />
    </View>
  );
};

const Likes = ({ likes }) => (
  <AppText>{likes.toLocaleString("en")} likes</AppText>
);

const Caption = ({ caption, user }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <AppText>
        <AppText style={styles.user}>{user} </AppText>
        {caption}
      </AppText>
    </View>
  );
};

const CommentSection = ({ comments }) => (
  <View style={{ marginTop: 5 }}>
    {!!comments.length && (
      <AppText color="grey">
        View{comments.length > 1 ? " all" : ""} {comments.length}
        {comments.length > 1 ? " comments" : " comment"}
      </AppText>
    )}
  </View>
);

const Comments = ({ comments }) => (
  <FlatList
    data={comments}
    keyExtractor={(comment) => comment.id}
    renderItem={({ item }) => (
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <AppText>
          <AppText style={styles.user}>{item.user} </AppText>
          {item.comment}
        </AppText>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  footer: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  footerContainer: {
    justifyContent: "space-between",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  leftFooterIcon: {
    justifyContent: "space-between",
    width: "32%",
  },
  likes: {
    fontWeight: 600,
  },
  postContainer: {
    margin: 5,
    marginBottom: 30,
  },
  postImage: {
    height: "100%",
    resizeMode: "cover",
    width: "100%",
  },
  postImageContainer: {
    width: "100%",
    height: 450,
  },
  user: {
    fontWeight: 600,
  },
});

export default Post;
