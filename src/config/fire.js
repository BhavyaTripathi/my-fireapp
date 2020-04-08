import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAGxZrWA3BdP0fmNQ4QEpvWdSf-0fVh2U4",
    authDomain: "my-fireapp-10f1a.firebaseapp.com",
    databaseURL: "https://my-fireapp-10f1a.firebaseio.com",
    projectId: "my-fireapp-10f1a",
    storageBucket: "my-fireapp-10f1a.appspot.com",
    messagingSenderId: "908709747901",
    
  };
 const fire=firebase.initializeApp(config);
 export default fire;