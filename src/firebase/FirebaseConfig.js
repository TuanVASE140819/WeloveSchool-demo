import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { getStorage } from "firebase/storage";

import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB0zqOHLBW9ACCg6AZk8pFoLP-8XrHFZJc",
  authDomain: "weloveschool-212d8.firebaseapp.com",
  projectId: "weloveschool-212d8",
  storageBucket: "weloveschool-212d8.appspot.com",
  messagingSenderId: "216775829113",
  appId: "1:216775829113:web:caddaa009e5c6a8b11d6a8",
  measurementId: "G-BCPQ9141EJ",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
//gôgle auth
const auth = getAuth();
const provider = new GoogleAuthProvider();

//facebook auth
// const auth2 = getAuth();
const provider2 = new FacebookAuthProvider();

export { auth, provider, provider2 };
export const db = getDatabase(app);

export const storage = getStorage(app);
