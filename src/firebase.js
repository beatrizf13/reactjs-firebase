import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAOf3gsNp8a-xAy2J8tYCGDLqGZk07lQdI",
    authDomain: "projeto-a6ef6.firebaseapp.com",
    databaseURL: "https://projeto-a6ef6.firebaseio.com",
    projectId: "projeto-a6ef6",
    storageBucket: "projeto-a6ef6.appspot.com",
    messagingSenderId: "321466626958"
};

firebase.initializeApp(config);

export default firebase;