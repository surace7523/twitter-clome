import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArgA7xY7CVdbyRXHviZBNwdwV9jFgq6QM",
    authDomain: "twiter-clone-c47d9.firebaseapp.com",
    projectId: "twiter-clone-c47d9",
    storageBucket: "twiter-clone-c47d9.appspot.com",
    messagingSenderId: "558165287242",
    appId: "1:558165287242:web:79592c1a91975dd846e1b3",
    measurementId: "G-V5FWYDQ3W8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;