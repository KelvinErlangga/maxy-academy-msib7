// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9nYf8J7lC77D_aHBdmkLOMUbU_frmrwU",
  authDomain: "todolist-e0344.firebaseapp.com",
  projectId: "todolist-e0344",
  storageBucket: "todolist-e0344.appspot.com",
  messagingSenderId: "193711868935",
  appId: "1:193711868935:web:2feb189c36b21e7feeaea2",
  measurementId: "G-6H0PEVN146",
  databaseURL: "https://todolist-e0344-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
