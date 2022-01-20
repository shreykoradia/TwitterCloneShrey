// import firebase from "firebase";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDFri4Q4ukGONpvPjdDTbLxIKElvQt6cFA",
//   authDomain: "twittercloneshrey.firebaseapp.com",
//   projectId: "twittercloneshrey",
//   storageBucket: "twittercloneshrey.appspot.com",
//   messagingSenderId: "214894461579",
//   appId: "1:214894461579:web:f55dfaa8d88178d39e0a8e",
//   measurementId: "G-9RS5WNREN7"
// };

//   const firebaseApp = firebase.initializeApp(firebaseConfig) ;
//   const db = firebaseApp.firestore();
//   export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFri4Q4ukGONpvPjdDTbLxIKElvQt6cFA",
  authDomain: "twittercloneshrey.firebaseapp.com",
  projectId: "twittercloneshrey",
  storageBucket: "twittercloneshrey.appspot.com",
  messagingSenderId: "214894461579",
  appId: "1:214894461579:web:f55dfaa8d88178d39e0a8e",
  measurementId: "G-9RS5WNREN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
export default db;