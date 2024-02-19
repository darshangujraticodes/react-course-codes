import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADpOMWtOUUoSHmFRDfpl2itD7Ri_plORs",
  authDomain: "react-firebase-practice-8c6fd.firebaseapp.com",
  projectId: "react-firebase-practice-8c6fd",
  storageBucket: "react-firebase-practice-8c6fd.appspot.com",
  messagingSenderId: "1087144171059",
  appId: "1:1087144171059:web:3308ee4f1b886ffe2f7546",
  measurementId: "G-KS7C6B9N0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
