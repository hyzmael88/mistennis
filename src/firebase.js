// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9dxCVdUb8wFgiXSdkS-M-sBY_GsrzPds",
    authDomain: "mistennis.firebaseapp.com",
    projectId: "mistennis",
    storageBucket: "mistennis.appspot.com",
    messagingSenderId: "219552606761",
    appId: "1:219552606761:web:e344b9143c8f39d7b6ca38"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app);
 */export const auth = getAuth(app);
export const db = getFirestore(app)