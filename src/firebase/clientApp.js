// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6gbQcDzbvjBFgOHszsIC65gUlrnFzc2o",
  authDomain: "myblogapp-2823a.firebaseapp.com",
  projectId: "myblogapp-2823a",
  storageBucket: "myblogapp-2823a.appspot.com",
  messagingSenderId: "201037691046",
  appId: "1:201037691046:web:f11036a92d918b5e501c67",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
