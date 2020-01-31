import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDY9Ru4t8eJwqWhbbDiUYt9_CGXf3YSDKA",
  authDomain: "crwn-clothing-database-dc9db.firebaseapp.com",
  databaseURL: "https://crwn-clothing-database-dc9db.firebaseio.com",
  projectId: "crwn-clothing-database-dc9db",
  storageBucket: "crwn-clothing-database-dc9db.appspot.com",
  messagingSenderId: "1071406402911",
  appId: "1:1071406402911:web:e01ea845f19cc3ab4c7aea"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
