import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBWChrQUDFjaYuwBCwZ-oXTRM6VzHFQYHU",
    authDomain: "facebook-clone-d0190.firebaseapp.com",
    databaseURL: "https://facebook-clone-d0190.firebaseio.com",
    projectId: "facebook-clone-d0190",
    storageBucket: "facebook-clone-d0190.appspot.com",
    messagingSenderId: "195744658816",
    appId: "1:195744658816:web:2f4952266301c410243d65",
    measurementId: "G-H6Z0J5JSVH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider } ;
  export default db;
