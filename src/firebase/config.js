import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB2PRIe-nHkFZQdx9bAt6y9X3Wb7fxBEJY",
    authDomain: "scribbler-5792e.firebaseapp.com",
    projectId: "scribbler-5792e",
    storageBucket: "scribbler-5792e.appspot.com",
    messagingSenderId: "632828784925",
    appId: "1:632828784925:web:080676035b582bd64ab1f4"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };