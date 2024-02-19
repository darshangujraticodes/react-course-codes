import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALMI8YrrRckL6dNe4rO-4DvA48o5Ji7os",
  authDomain: "react-firebase-crud-88ab2.firebaseapp.com",
  projectId: "react-firebase-crud-88ab2",
  storageBucket: "react-firebase-crud-88ab2.appspot.com",
  messagingSenderId: "339016396789",
  appId: "1:339016396789:web:78a039f141e786d4abbabc",
  measurementId: "G-BV1R8M9Z6X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
