import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './Config/config';

const config = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  storageBucket: firebaseConfig.storageBucket,
};

const firebaseInitializer = firebase.initializeApp(config);
const database = firebaseInitializer.database();

function saveGameState(uuid) {
  const savedState = window.state.player;
  database.ref(`saves/${uuid}`).set(savedState);
}

function loadGameState(uuid) {
  database
    .ref()
    .child('saves')
    .child(uuid)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        const jsonSnap = snapshot.toJSON();
        window.state.player = jsonSnap;
      } else {
        throw new Error('No data available to load');
      }
    })
    .catch((error) => {
      throw error;
    });
}

export {
  saveGameState,
  loadGameState,
};
