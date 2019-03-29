import firebase from 'firebase';
 

const config = {
    apiKey: "AIzaSyAK49LUWNjfUqOuFqxtEGvyNi2471eoHWU",
    authDomain: "sanjaypicturea.firebaseapp.com",
    databaseURL: "https://sanjaypicturea.firebaseio.com",
    projectId: "sanjaypicturea",
    storageBucket: "sanjaypicturea.appspot.com",
    messagingSenderId: "1022711856193"
  };


firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();