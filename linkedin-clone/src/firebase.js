// import firebase from 'firebase'   // Use this on old version.

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7t_2Ws71RATqY019GnUigwBt1iR2YBMw",
    authDomain: "linkedin-clone-b4a71.firebaseapp.com",
    projectId: "linkedin-clone-b4a71",
    storageBucket: "linkedin-clone-b4a71.appspot.com",
    messagingSenderId: "943948357200",
    appId: "1:943948357200:web:3a45fee6be3d0941fcfb55"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};

// export { db };
// export default auth;  
