// Import required Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkyWwae53roIqMc7Put97IVceDDc5qmvo",
    authDomain: "lrcadminmanagement.firebaseapp.com",
    projectId: "lrcadminmanagement",
    storageBucket: "lrcadminmanagement.appspot.com",
    messagingSenderId: "825709756809",
    appId: "1:825709756809:web:453909cfa2baa03190e158",
    measurementId: "G-Y5Q5KL23VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

