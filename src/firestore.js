import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import  'firebase/database';

const config = {
    apiKey: "AIzaSyDLNOZ--Fpszg1fgwx4asg-NL-cSejaKtk",
    authDomain: "invoice-fabe8.firebaseapp.com",
    databaseURL: "https://invoice-fabe8.firebaseio.com",
    projectId: "invoice-fabe8",
    storageBucket: "invoice-fabe8.appspot.com",
    messagingSenderId: "606942701186",
    appId: "1:606942701186:web:6a87611c8742fdc5c9b69b"
};

const app = firebase.initializeApp(config);
export const db  = app.firestore();
export default app;

