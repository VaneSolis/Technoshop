// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdTBOPaW-qAM_JmL59sdsW3K55alD_oQ4",
  authDomain: "technoshop-30562.firebaseapp.com",
  projectId: "technoshop-30562",
  storageBucket: "technoshop-30562.appspot.com",
  messagingSenderId: "1068260008340",
  appId: "1:1068260008340:web:54127b00a70b4a2cb46f81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);