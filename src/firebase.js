// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_k_eM19QbJ-5aXgPMRi_6GSKYqifBc-0",
  authDomain: "ecommerceapp-53a9e.firebaseapp.com",
  projectId: "ecommerceapp-53a9e",
  storageBucket: "ecommerceapp-53a9e.appspot.com",
  messagingSenderId: "307589658505",
  appId: "1:307589658505:web:79812b423615f154f41358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage=getStorage(app)
const auth= getAuth(app)
export  {db,storage,auth}