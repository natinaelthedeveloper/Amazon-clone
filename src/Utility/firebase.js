import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApa07W8gV2yNAf62SzGOD25p7wGbX5AKs",
  authDomain: "clone-18ae3.firebaseapp.com",
  projectId: "clone-18ae3",
  storageBucket: "clone-18ae3.firebasestorage.app",
  messagingSenderId: "956189626504",
  appId: "1:956189626504:web:7473ff94e38841c1cf0f3d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
