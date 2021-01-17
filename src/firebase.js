import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAhNLFQpGSOYyKW7n6nTTU4_SYwbTS_Z10',
  authDomain: 'freshpicksonline.firebaseapp.com',
  projectId: 'freshpicksonline',
  storageBucket: 'freshpicksonline.appspot.com',
  messagingSenderId: '627556687782',
  appId: '1:627556687782:web:f5e99b7a8cd75ca0dcf967',
  measurementId: 'G-E71D45YY6M',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
