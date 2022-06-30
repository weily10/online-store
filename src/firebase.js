import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBPSfwSl7mmmZb6RUBDg4XVtNofepUFV3A",
  authDomain: "online-store-799b9.firebaseapp.com",
  projectId: "online-store-799b9",
  storageBucket: "online-store-799b9.appspot.com",
  messagingSenderId: "896232681727",
  appId: "1:896232681727:web:c5e24492fd49a476849cca",
  measurementId: "G-3YEE972B5C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };