// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDisqmdj5IBJ-t4H_s0yOnc_7GFGvAJtQ8",
  authDomain: "a-interview-c4e08.firebaseapp.com",
  projectId: "a-interview-c4e08",
  storageBucket: "a-interview-c4e08.firebasestorage.app",
  messagingSenderId: "433739362684",
  appId: "1:433739362684:web:f865985e662bf77c8234f9",
  measurementId: "G-S8QKMKD1G7",
};

// Initialize Firebase
// Về sau có thể scale lên = getApp(name) để lấy đúng app và initializeApp(config, name) để khởi tạo app mới có name
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
