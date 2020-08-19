import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDM9xVvzais97U3mSOtLiGMudYrBYgZSUI",
    authDomain: "audiotest-1565f.firebaseapp.com",
    databaseURL: "https://audiotest-1565f.firebaseio.com",
    projectId: "audiotest-1565f",
    storageBucket: "audiotest-1565f.appspot.com",
    messagingSenderId: "229444142727",
    appId: "1:229444142727:web:5b48586d97b6acaa735a22",
    measurementId: "G-TV67G88VK0"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;