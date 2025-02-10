import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, getDoc, doc, onSnapshot } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAEcb7XHSu3jYQZey7Hh5IfQoixjyVHQXQ",
    authDomain: "myapp-31e00.firebaseapp.com",
    projectId: "myapp-31e00",
    storageBucket: "myapp-31e00.firebasestorage.app",
    messagingSenderId: "955276483223",
    appId: "1:955276483223:web:30deff23cf1a85123767d2"
  };
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, setDoc, getDoc, doc, onSnapshot };
