// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyPU3Yd5SA4hzbJIO2rOh9MCu61N4vIbc",
  authDomain: "netflixgpt-a2eaa.firebaseapp.com",
  projectId: "netflixgpt-a2eaa",
  storageBucket: "netflixgpt-a2eaa.appspot.com",
  messagingSenderId: "87654224381",
  appId: "1:87654224381:web:26accd419064f65eb70994",
  measurementId: "G-94DVMR12WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();