// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5ZgKEnkpFe003LG2uMjYXfXjVCjH49zI",
  authDomain: "insta-clone-84e9d.firebaseapp.com",
  projectId: "insta-clone-84e9d",
  storageBucket: "insta-clone-84e9d.appspot.com",
  messagingSenderId: "1047275786237",
  appId: "1:1047275786237:web:6f2c3b7444d23924c5d394",
  measurementId: "G-C3KK02CZ7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {app, firestore, auth, storage};