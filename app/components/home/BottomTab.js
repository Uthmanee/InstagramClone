import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import RowContainer from "../RowContainer";
import { Divider } from "@rneui/base";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home--v1.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png",
    inactive: "https://img.icons8.com/ios/50/FFFFFF/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png",
  },
  {
    name: "Notification",
    active:
      "https://img.icons8.com/glyph-neue/64/FFFFFF/appointment-reminders.png",
    inactive:
      "https://img.icons8.com/wired/64/FFFFFF/appointment-reminders.png",
  },
  {
    name: "Profile",
    active:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-231db.appspot.com/o/profile.jpg?alt=media&token=12d51d66-ccce-4d27-8c75-23dadc4c4d06",
    inactive:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-231db.appspot.com/o/profile.jpg?alt=media&token=12d51d66-ccce-4d27-8c75-23dadc4c4d06",
  },
];

function BottomTab({ icons }) {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profile() : null,
          activeTab === "Profile" && icon.name == activeTab
            ? styles.profile(activeTab)
            : null,
        ]}
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={0.5} orientation="vertical" />
      <RowContainer style={styles.container}>
        {icons.map((icon, index) => (
          <Icon icon={icon} key={index} />
        ))}
        {/* <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/profile.jpg")}
          />
        </TouchableOpacity> */}
      </RowContainer>
    </View>
  );
}

// home from foundation
// magnifying-glass from Entypo

// Home filled          https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png
// Home outlined        https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home--v1.png
// Reel filled          https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png
// Reel outlined        https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png
// Search outlined      https://img.icons8.com/ios/50/FFFFFF/search--v1.png
// Search active        https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png
// Noification outlined https://img.icons8.com/wired/64/FFFFFF/appointment-reminders.png
// Notification filled  https://img.icons8.com/glyph-neue/64/FFFFFF/appointment-reminders.png

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    paddingTop: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
  profile: (activeTab = "") => ({
    borderColor: "#fff",
    borderRadius: 16,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    resizeMode: "cover",
  }),
  wrapper: {
    backgroundColor: "#000",
    bottom: "0%", //3%
    position: "absolute",
    width: "100%",
    zIndex: 999,
  },
});

export default BottomTab;
