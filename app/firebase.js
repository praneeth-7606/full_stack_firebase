// Import the functions you need from the SDKs you need
"use client"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf8t4ZlZ0IvPuziXwRMN-bWAa7WmqmKfk",
  authDomain: "fullstackapp-f8405.firebaseapp.com",
  projectId: "fullstackapp-f8405",
  storageBucket: "fullstackapp-f8405.appspot.com",
  messagingSenderId: "87866491440",
  appId: "1:87866491440:web:ab74e5366cf20f38d7a3f5",
  measurementId: "G-JCKRREWKQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app