// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4U0otdhJXWCsgutsCuVPisuY59O6RcCY",
  authDomain: "netflixgpt-ac5bb.firebaseapp.com",
  projectId: "netflixgpt-ac5bb",
  storageBucket: "netflixgpt-ac5bb.appspot.com",
  messagingSenderId: "258359575600",
  appId: "1:258359575600:web:d9d21c31d51ac29affd9f5",
  measurementId: "G-8PTDXKK5YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);