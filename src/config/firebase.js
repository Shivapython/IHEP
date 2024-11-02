// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBK8GC089H0suYFkYCxyUEpWFHfCQeDC4",
  authDomain: "login-auth-ihep.firebaseapp.com",
  projectId: "login-auth-ihep",
  storageBucket: "login-auth-ihep.firebasestorage.app",
  messagingSenderId: "208817622083",
  appId: "1:208817622083:web:e64b706f660336b1b858f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;