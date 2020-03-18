import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyBOa8RfQNgcSCvJdBhmpHcIt1nmKoHS0cs',
  authDomain: 'whatever-you-feel.firebaseapp.com',
  databaseURL: 'https://whatever-you-feel.firebaseio.com',
  projectId: 'whatever-you-feel',
  storageBucket: 'whatever-you-feel.appspot.com',
  messagingSenderId: '794748365929',
};
let app = Firebase.initializeApp(config);
export const db = app.database();
