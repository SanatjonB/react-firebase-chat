import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AuthDomain,
  projectId: import.meta.env.ProjectId,
  storageBucket: import.meta.env.StorageBucket,
  messagingSenderId: import.meta.env.MessagingSenderId,
  appId: import.meta.env.AppId,
  measurementId: import.meta.env.MeasurementId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
