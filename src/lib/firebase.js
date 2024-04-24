import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c899e.firebaseapp.com",
  projectId: "reactchat-c899e",
  storageBucket: "reactchat-c899e.appspot.com",
  messagingSenderId: "496571466271",
  appId: "1:496571466271:web:4de9d0cac835956d7d8b2a",
  measurementId: "G-0XDDX4CHGV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
