import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDqTKvwBaqLzGkeQyA8V_Q7c2mIHF2vScY",
    authDomain: "digital-project-9fc25.firebaseapp.com",
    projectId: "digital-project-9fc25",
    storageBucket: "digital-project-9fc25.appspot.com",
    messagingSenderId: "128527742049",
    appId: "1:128527742049:web:27c588f83e96c313a0a620"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database()


  
  
  
