import 'firebase/firestore';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAUkkZzw3ZLsPDg4RBp4i-drW-ibaf7dM0",
  authDomain: "tienda-fisp-ecommerce.firebaseapp.com",
  projectId: "tienda-fisp-ecommerce",
  storageBucket: "tienda-fisp-ecommerce.appspot.com",
  messagingSenderId: "83369511921",
  appId: "1:83369511921:web:6df022f7acc81896f61250"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore(){
    return firebase.firestore(app)
}
