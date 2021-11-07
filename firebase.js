import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCpyEJfZJNiZGVdcv8gSv6Dh0zULD58GTc",
  authDomain: "uber-27cbd.firebaseapp.com",
  projectId: "uber-27cbd",
  storageBucket: "uber-27cbd.appspot.com",
  messagingSenderId: "426225807804",
  appId: "1:426225807804:web:0923fff898ccfa472abbb9",
  measurementId: "G-0LS90Z8820"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth }