import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDRGciu0B4airLPm-cXYqo8_6ogjNX0ok",
  authDomain: "react-firebase-chatapp-2eb08.firebaseapp.com",
  projectId: "react-firebase-chatapp-2eb08",
  storageBucket: "react-firebase-chatapp-2eb08.appspot.com",
  messagingSenderId: "238207710350",
  appId: "1:238207710350:web:431b8826b6a30571ac85df",
  measurementId: "G-3HTKN4F2VH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
