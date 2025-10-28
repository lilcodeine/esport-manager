import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpd6nhaB0sGjCgXRZUTppAzCoqnb-9oRE",
  authDomain: "esport-manager-c3899.firebaseapp.com",
  projectId: "esport-manager-c3899",
  storageBucket: "esport-manager-c3899.firebasestorage.app",
  messagingSenderId: "1003354938081",
  appId: "1:1003354938081:web:bea5b674b27fa66fe0b5a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;