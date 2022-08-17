// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFireStore } from 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK0Od3dSYnazIQ7S17PibJ34nZYJBTL18",
  authDomain: "plantoday-4c60f.firebaseapp.com",
  projectId: "plantoday-4c60f",
  storageBucket: "plantoday-4c60f.appspot.com",
  messagingSenderId: "869228018929",
  appId: "1:869228018929:web:ac1dc04d5ccb34aafd3d50",
  measurementId: "G-3QR17254ME"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()

// const db = getFireStore()

export {auth};
// const analytics = firebase.getAnalytics(app);