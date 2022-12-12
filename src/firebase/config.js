import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAojXjAqZ4s8-I86HtBiZoARVmJUzuhxnM",
  authDomain: "eshop-13187.firebaseapp.com",
  projectId: "eshop-13187",
  storageBucket: "eshop-13187.appspot.com",
  messagingSenderId: "530327069408",
  appId: "1:530327069408:web:6c6066c4b757ad0e776685",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
