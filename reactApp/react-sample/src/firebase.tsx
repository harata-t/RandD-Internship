import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDgl4uYQCStusFLeC2Bitn3QiQtuAigcxc",
    authDomain: "chat-896d0.firebaseapp.com",
    projectId: "chat-896d0",
    storageBucket: "chat-896d0.appspot.com",
    messagingSenderId: "701724825448",
    appId: "1:701724825448:web:69c03e2046f3150cdfa8dd",
    measurementId: "G-PKJ7CCQNPR"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore();
export const storage = getStorage();

export default app;