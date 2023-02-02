import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY ,
  authDomain: "todo-7c57e.firebaseapp.com",
  projectId: "todo-7c57e",
  storageBucket: "todo-7c57e.appspot.com",
  messagingSenderId: "543338630447",
  appId: "1:543338630447:web:04c6e5d5f6ac61b3cae5da"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)