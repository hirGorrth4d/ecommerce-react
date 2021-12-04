
import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig ={

}

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase =fb.firestore();
