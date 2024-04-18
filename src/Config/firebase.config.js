import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB2QxRcouSnjizxaQ4yZMtRycvZvs9Xy4",
  authDomain: "clean-co-a45a6.firebaseapp.com",
  projectId: "clean-co-a45a6",
  storageBucket: "clean-co-a45a6.appspot.com",
  messagingSenderId: "582821177760",
  appId: "1:582821177760:web:b6c040c44c3e3c8e78dcc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
