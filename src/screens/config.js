import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA0a5wfZFpMjh42L_YoZ4hXNV8mY0jdufw",
    databaseURL: ' ',
    authDomain: "gardenapp-d1f3a.firebaseapp.com",
    projectId: "gardenapp-d1f3a",
    storageBucket: "gardenapp-d1f3a.appspot.com",
    messagingSenderId: "396749367965",
    appId: "1:396749367965:web:6c09833c71f454e2f28274",
    // measurementId: "G-X7D35488K4"
  };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

//const todoCollection = firebase.default.firestore().collection('todo')
export { firebase, auth,firebaseConfig };
//export const afs = firebase.firestore().collection('todo');
//export const db = firebase.database().ref('cate');