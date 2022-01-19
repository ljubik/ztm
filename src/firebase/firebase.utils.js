<<<<<<< HEAD
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

=======
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
  authDomain: 'crwn-db.firebaseapp.com',
  databaseURL: 'https://crwn-db.firebaseio.com',
  projectId: 'crwn-db',
  storageBucket: 'crwn-db.appspot.com',
  messagingSenderId: '850995411664',
  appId: '1:850995411664:web:7ddc01d597846f65'
};

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

>>>>>>> ba15a8ed208e1d1a9a684eead96e3782ac46759a
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
<<<<<<< HEAD

provider.setCustomParameters({ prompt: "select account"});

=======
provider.setCustomParameters({ prompt: 'select_account' });
>>>>>>> ba15a8ed208e1d1a9a684eead96e3782ac46759a
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
