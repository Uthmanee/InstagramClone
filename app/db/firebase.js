import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKGkJeffmXrvftc2uCljqq1emyBNSG58Q",
  authDomain: "instagram-clone-231db.firebaseapp.com",
  projectId: "instagram-clone-231db",
  storageBucket: "instagram-clone-231db.appspot.com",
  messagingSenderId: "77026366501",
  appId: "1:77026366501:web:e3046b5cc06e25a5909bcc",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();
export { firebase, db };
