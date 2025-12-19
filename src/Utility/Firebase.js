// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// import "firebase/compat/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs2VVpTjt2WHV179_R04yrKYE6c1xBjIw",
  authDomain: "clone-e1f2f.firebaseapp.com",
  projectId: "clone-e1f2f",
  storageBucket: "clone-e1f2f.firebasestorage.app",
  messagingSenderId: "1051672562860",
  appId: "1:1051672562860:web:51ca448d193fbb2dd82309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

export const auth = getAuth(app);
export const db = getFirestore(app);













