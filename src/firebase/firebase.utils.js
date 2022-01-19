import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCC03revhc7dgRadAWQN9Bwy2D4VaG5Qp0",
    authDomain: "ztm-db-ed852.firebaseapp.com",
    projectId: "ztm-db-ed852",
    storageBucket: "ztm-db-ed852.appspot.com",
    messagingSenderId: "1007656975680",
    appId: "1:1007656975680:web:a2cf1b47fbc69721918ea5",
    measurementId: "G-44C2Y90BZP"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
