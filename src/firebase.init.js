// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcs2ng-Lx_kDY2VRrr1WpOFQy7ONOcx2E",
  authDomain: "assignment-12-30f8d.firebaseapp.com",
  projectId: "assignment-12-30f8d",
  storageBucket: "assignment-12-30f8d.appspot.com",
  messagingSenderId: "459382244616",
  appId: "1:459382244616:web:0b1ca4a34eac203d9058bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;