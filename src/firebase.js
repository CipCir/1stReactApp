import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCzNXAN20lsgyZ8LS5kpD4ZCv2SWd6ekZM",
  authDomain: "firstreact-6036d.firebaseapp.com",
  databaseURL:
    "https://firstreact-6036d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firstreact-6036d",
  storageBucket: "firstreact-6036d.appspot.com",
  messagingSenderId: "427323108817",
  appId: "1:427323108817:web:8de95d065606d88d9284f0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const auth = app.auth();
export default app;
