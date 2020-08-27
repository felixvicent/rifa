import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyBlZwfrkTKnLjMOvn17n8qaqeh6l9o0foQ",
  authDomain: "rifa-e19dc.firebaseapp.com",
  databaseURL: "https://rifa-e19dc.firebaseio.com",
  projectId: "rifa-e19dc",
  storageBucket: "rifa-e19dc.appspot.com",
  messagingSenderId: "48143643187",
  appId: "1:48143643187:web:dfcfa4a745c6564a806946",
  measurementId: "G-Y0Q6N13HH9"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;