// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAavazu-aaPEgI9cjkCn0_40Au3Hw4W9iM",
  authDomain: "netfilx-clone-7484f.firebaseapp.com",
  projectId: "netfilx-clone-7484f",
  storageBucket: "netfilx-clone-7484f.appspot.com",
  messagingSenderId: "541225080312",
  appId: "1:541225080312:web:f1b434c5ac92bea39e320d",
  measurementId: "G-0935F6K2TT"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);