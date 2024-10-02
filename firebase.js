// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO1ygADhqJ92vNBGPAVMmshHHTlQZFIPQ",
  authDomain: "mindcare-auth.firebaseapp.com",
  projectId: "mindcare-auth",
  storageBucket: "mindcare-auth.appspot.com",
  messagingSenderId: "208419785378",
  appId: "1:208419785378:web:6356c683d09e9c360ca5fb",
  measurementId: "G-N832KG9JHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

export {auth};