// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgYHYITD3NfOQLqq6fQcMbMo46vLeAdN0",
    authDomain: "amaz0n-imran.firebaseapp.com",
    databaseURL: "https://amaz0n-imran.firebaseio.com",
    projectId: "amaz0n-imran",
    storageBucket: "amaz0n-imran.appspot.com",
    messagingSenderId: "901981649620",
    appId: "1:901981649620:web:e8846470775c398fb05941",
    measurementId: "G-20YFBWGQEH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};