// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDibiPr72in6SVzHNTxtB-g_eIHz-NlGNw",
  authDomain: "myecom-5bbf4.firebaseapp.com",
  projectId: "myecom-5bbf4",
  storageBucket: "myecom-5bbf4.firebasestorage.app",
  messagingSenderId: "336952464782",
  appId: "1:336952464782:web:3f2c824938f924d7e4c0df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }