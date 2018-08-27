import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCXNV40G9QPJ9v5yrAO2esinmJRqT9_ZE8",
    authDomain: "kambanzfirebase.firebaseapp.com",
    databaseURL: "https://kambanzfirebase.firebaseio.com",
    projectId: "kambanzfirebase",
    storageBucket: "kambanzfirebase.appspot.com",
    messagingSenderId: "656751927248"
  };

let app = firebase.initializeApp(config);
let db = app.database()

export default db