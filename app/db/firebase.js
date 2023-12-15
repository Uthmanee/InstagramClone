// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-xaMM27tUHYlscaoJYTOr-HWKpsgQv_s",
  authDomain: "rn-instagram-clone-87091.firebaseapp.com",
  projectId: "rn-instagram-clone-87091",
  storageBucket: "rn-instagram-clone-87091.appspot.com",
  messagingSenderId: "344956368264",
  appId: "1:344956368264:web:2da4eba3fe9645d73b763d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
