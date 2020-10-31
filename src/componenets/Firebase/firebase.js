
import firebase from 'firebase';

// Initiallize firebase
var firebaseApp=firebase.initializeApp({
// Your web app's Firebase configuration

    apiKey: "AIzaSyA_rrOu7X9zEMjmQDgy5Sv_uldeT-CutXo",
    authDomain: "react-portfolio-contact-form.firebaseapp.com",
    databaseURL: "https://react-portfolio-contact-form.firebaseio.com",
    projectId: "react-portfolio-contact-form",
    storageBucket: "react-portfolio-contact-form.appspot.com",
    messagingSenderId: "445755419517",
    appId: "1:445755419517:web:c22030e4e40e0667b3ba14"
  
  
});

var db = firebaseApp.firestore();

export { db };
  



