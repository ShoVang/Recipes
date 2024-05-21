// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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

export {app,auth};
