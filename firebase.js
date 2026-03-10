import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot, updateDoc } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyASRIvu-I8V63eZvB3lHMMIxwCDM-WYzYA",
authDomain: "relationship-tracker-aa2bd.firebaseapp.com",
projectId: "relationship-tracker-aa2bd",
storageBucket: "relationship-tracker-aa2bd.firebasestorage.app",
messagingSenderId: "345827242997",
appId: "1:345827242997:web:1eee98af475fa160e5e6bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.updateDoc = updateDoc;
window.onSnapshot = onSnapshot;