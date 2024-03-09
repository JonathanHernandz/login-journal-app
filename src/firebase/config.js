// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjAjedPXl7BzLBoTvWU-rK_sGUmgZDOV4",
  authDomain: "react-cursos-e4771.firebaseapp.com",
  projectId: "react-cursos-e4771",
  storageBucket: "react-cursos-e4771.appspot.com",
  messagingSenderId: "456529093605",
  appId: "1:456529093605:web:222a8f910c06735538850c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );