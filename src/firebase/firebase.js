
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";

let firebaseConfig ={
    apiKey: "AIzaSyAUkkZzw3ZLsPDg4RBp4i-drW-ibaf7dM0",
    authDomain: "tienda-fisp-ecommerce.firebaseapp.com",
    projectId: "tienda-fisp-ecommerce",
    storageBucket: "tienda-fisp-ecommerce.appspot.com",
    messagingSenderId: "83369511921",
    appId: "1:83369511921:web:6df022f7acc81896f61250"

}

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase =fb.firestore();
