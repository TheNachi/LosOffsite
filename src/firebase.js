import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDHDfEFdqlqI3q6ZcNosiRzKlIocsKEo5M',
  authDomain: 'losoffsite-11b7b.firebaseapp.com',
  databaseURL: 'https://losoffsite-11b7b.firebaseio.com',
  projectId: 'losoffsite-11b7b',
  storageBucket: 'losoffsite-11b7b.appspot.com',
  messagingSenderId: '281493092118'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
