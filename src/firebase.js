import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCfS6pj7KQB1yIU_VFla1o0IyMnyiJqj_E",
    authDomain: "chat-app-20a1d.firebaseapp.com",
    projectId: "chat-app-20a1d",
    storageBucket: "chat-app-20a1d.appspot.com",
    messagingSenderId: "208359765105",
    appId: "1:208359765105:web:786db6adfcad4b4f9f17d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();