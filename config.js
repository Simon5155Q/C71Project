import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBux7ezaNfaxyFHz5cvi7cTan4oo7hdo3Q",
  authDomain: "c71project-cbbc8.firebaseapp.com",
  projectId: "c71project-cbbc8",
  storageBucket: "c71project-cbbc8.appspot.com",
  messagingSenderId: "380780771188",
  appId: "1:380780771188:web:dccba1aa9ee1dfb06b9e21"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

