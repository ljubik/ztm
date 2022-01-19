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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
