// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getMessaging} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg79X6BAw3tGUYkWcRw6U56tAbQMojSso",
  authDomain: "clima-33efe.firebaseapp.com",
  projectId: "clima-33efe",
  storageBucket: "clima-33efe.appspot.com",
  messagingSenderId: "376626477419",
  appId: "1:376626477419:web:f654c741aabab90adb742e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)