import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {awaitExpression} from "@babel/types";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
