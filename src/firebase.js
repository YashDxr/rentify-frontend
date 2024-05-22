// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_AUTH_KEY,
  authDomain: "oauthrealtor.firebaseapp.com",
  projectId: "oauthrealtor",
  storageBucket: "oauthrealtor.appspot.com",
  messagingSenderId: "784485651526",
  appId: "1:784485651526:web:a4d42f8a2151b9aa362647"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);