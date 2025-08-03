// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPUwRfTQ7ZPR6DajF8TEfiT87Y8qJFbRk",
  authDomain: "sand-51939.firebaseapp.com",
  projectId: "sand-51939",
  storageBucket: "sand-51939.firebasestorage.app",
  messagingSenderId: "1033270516561",
  appId: "1:1033270516561:web:27e1a09bc6d03fd7d05170",
  measurementId: "G-XW1Z58BZVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);