import firebase from 'firebase'
require('dotenv').config()
let config = {
  apiKey: `${process.env.apiKey}`,
  authDomain: `${process.env.authDomain}`,
  databaseURL: `${process.env.databaseURL}`,
  projectId: `${process.env.projectId}`,
  storageBucket: `${process.env.storageBucket}`,
  messagingSenderId: `${process.env.messagingSenderId}`
  };

let app = firebase.initializeApp(config);
let db = app.database()

export default db