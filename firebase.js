

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyCKyND8UExzZxWhlZz8HGAc7jncow8-Uz4",
    authDomain: "twitter-clone-f28b5.firebaseapp.com",
    projectId: "twitter-clone-f28b5",
    storageBucket: "twitter-clone-f28b5.appspot.com",
    messagingSenderId: "899266461551",
    appId: "1:899266461551:web:114a7b1b34fad55f46729a"
  };
  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };