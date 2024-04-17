// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0zqOHLBW9ACCg6AZk8pFoLP-8XrHFZJc",
  authDomain: "weloveschool-212d8.firebaseapp.com",
  projectId: "weloveschool-212d8",
  storageBucket: "weloveschool-212d8.appspot.com",
  messagingSenderId: "216775829113",
  appId: "1:216775829113:web:caddaa009e5c6a8b11d6a8",
  measurementId: "G-BCPQ9141EJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app);
