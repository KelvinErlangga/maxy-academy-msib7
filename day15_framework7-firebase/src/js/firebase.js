import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAx7wKZO9om1eDJIQ7Um1OuZctctsOh6dE",
  authDomain: "day15-5a4b9.firebaseapp.com",
  projectId: "day15-5a4b9",
  storageBucket: "day15-5a4b9.appspot.com",
  messagingSenderId: "756111556061",
  appId: "1:756111556061:web:54b04ec5eac6b7b7f48a34",
  measurementId: "G-EHHCPM1GT4",
  databaseURL: "https://day15-5a4b9-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbRealtime = getDatabase(app); // Inisialisasi Realtime Database

export { dbRealtime };
