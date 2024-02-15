// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIOYpqkXMpzKY8cx7GzBzvi75KOQgTUEM",
  authDomain: "cotrafa-intro.firebaseapp.com",
  projectId: "cotrafa-intro",
  storageBucket: "cotrafa-intro.appspot.com",
  messagingSenderId: "445432656043",
  appId: "1:445432656043:web:a720eff2284e7876ae47ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Conectar un Google - autenticación
export const google = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
export const dataBase = getFirestore(app);
