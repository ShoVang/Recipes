// src/context/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAuZJwy_vAKBoDQOfAQXe-UshMdsOBb6CA",
  authDomain: "potluck-recipes.firebaseapp.com",
  projectId: "potluck-recipes",
  storageBucket: "potluck-recipes.appspot.com",
  messagingSenderId: "406248719418",
  appId: "1:406248719418:web:15b61e82b74b4a72202103",
  measurementId: "G-7HJZDVN2FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
