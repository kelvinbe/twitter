import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDL-ivZzAojQrYo14l6luqFXf2ykDUdTTk",
    authDomain: "twitter-api-d8f20.firebaseapp.com",
    projectId: "twitter-api-d8f20",
    storageBucket: "twitter-api-d8f20.appspot.com",
    messagingSenderId: "221022558915",
    appId: "1:221022558915:web:1ee3fe0afda378bc64e076",
    measurementId: "G-LR91D5GE1N"
  };

firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth()
export default firebase;