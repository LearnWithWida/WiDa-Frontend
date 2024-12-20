import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzW_wRe-yEbhhdJqhEfUTTdrLEeh1gqN4",
  authDomain: "learnwithwida-5853c.firebaseapp.com",
  projectId: "learnwithwida-5853c",
  storageBucket: "learnwithwida-5853c.applestorage.app",
  messagingSenderId: "1000090659508",
  appId: "1:1000090659508:web:7e4e4576e9bb13473e05e1",
  measurementId: "G-QDS7R8E648"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();