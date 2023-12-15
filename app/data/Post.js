import Users from "./Users";

// The post icon data only describes the icons such as like, comment, share and bookmark and store the url for their CDN. It is not used to implement any logic in our code.
export const PostIcons = [
  { iconName: "like", uri: "https://img.icons8.com/metro/26/FFFFFF/like.png" },
  {
    iconName: "liked",
    uri: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-glyph-wedding-tanah-basah-glyph-tanah-basah-23.png",
  },
  {
    iconName: "comment",
    uri: "https://img.icons8.com/external-regular-kawalan-studio/96/FFFFFF/external-chat-chat-regular-kawalan-studio-2.png",
  },
  {
    iconName: "share",
    uri: "https://img.icons8.com/ios/50/FFFFFF/sent--v1.png",
  },
  {
    iconName: "bookmark",
    uri: "https://img.icons8.com/ios/50/FFFFFF/bookmark-ribbon--v1.png",
  },
  {
    iconName: "bookmarked",
    uri: "https://img.icons8.com/ios-filled/50/FFFFFF/bookmark-ribbon.png",
  },
];

export default POST = [
  {
    id: 1,
    imageUrl: require("../assets/image_4.jpg"),
    user: Users[0].user,
    likes: 7870,
    caption:
      "Chasing sunsets and good vibes 🌅✨ #AdventuresAwait #LivingMyBestLife",
    profile_picture: Users[0].image,
    Comments: [
      {
        id: 1,

        user: "Sylevestre John",
        comment: "Steeze🥶!!!",
      },
      {
        id: 2,

        user: "Shani Jamilla",
        comment: "My bro is fly!",
      },
    ],
  },
  {
    id: 2,
    imageUrl: require("../assets/image_3.jpg"),
    user: Users[1].user,
    likes: 6670,
    caption: "Vamos 💪",
    profile_picture: Users[1].image,
    Comments: [
      {
        id: 1,

        user: "Amandla Sternberg",
        comment: "Hermano ❤️",
      },
      { id: 2, user: "Shani Jamilla", comment: "Holla Papi ❤️" },
    ],
  },
  {
    id: 3,
    imageUrl: require("../assets/image_5.jpg"),
    user: Users[2].user,
    likes: 940,
    caption:
      "Diappointed to pick up an injury. The journey to recovery begins.",
    profile_picture: Users[2].image,
    Comments: [
      {
        id: 1,
        user: "Issa Diop",
        comment: "See you on the pitch soon brother❤️",
      },
      // {     id: 2,
      //   user: "Tanguy Ndombele",
      //   comment: "Get well soon brother💪",
      // },
    ],
  },
];
