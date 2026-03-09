// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8l6mogSfv1BuAxBghh4Es_aoHY_ddbKo",
  authDomain: "fir-react-949d7.firebaseapp.com",
  projectId: "fir-react-949d7",
  storageBucket: "fir-react-949d7.firebasestorage.app",
  messagingSenderId: "547314119843",
  appId: "1:547314119843:web:7f2f142856374c4092bb16",
  measurementId: "G-H7MC968E65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);