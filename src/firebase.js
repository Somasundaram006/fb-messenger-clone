import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0eRRnj0G8xpq8SUdzu0D_7r7PDhYWEds",
    authDomain: "facebook-messenger-clone-4fe86.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-4fe86.firebaseio.com",
    projectId: "facebook-messenger-clone-4fe86",
    storageBucket: "facebook-messenger-clone-4fe86.appspot.com",
    messagingSenderId: "658776054557",
    appId: "1:658776054557:web:c01eb8548be3b8540a5ff4",
    measurementId: "G-K0WM8FLERE"
});

const db = firebaseApp.firestore();

export default db;