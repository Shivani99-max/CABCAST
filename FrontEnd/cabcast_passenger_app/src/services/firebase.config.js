import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "<API KEY>",
  authDomain: "cabcast-2024.firebaseapp.com",
  projectId: "cabcast-2024",
  storageBucket: "cabcast-2024.appspot.com",
  messagingSenderId: "<MESSAGE_ID>",
  appId: "<APP_ID>",
  measurementId: "<MEASUREMENT_ID>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, analytics, auth}