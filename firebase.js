// firebase.js

// Import the necessary Firebase libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkyWwae53roIqMc7Put97IVceDDc5qmvo",
  authDomain: "lrcadminmanagement.firebaseapp.com",
  projectId: "lrcadminmanagement",
  storageBucket: "lrcadminmanagement.firebasestorage.app",
  messagingSenderId: "825709756809",
  appId: "1:825709756809:web:453909cfa2baa03190e158",
  measurementId: "G-Y5Q5KL23VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore for use in other files
export { db };
