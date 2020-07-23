import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxwDAF1qbynse82igfh4SVpqUiMK2MR0s",
  authDomain: "hatch-5eb22.firebaseapp.com",
  databaseURL: "https://hatch-5eb22.firebaseio.com",
  projectId: "hatch-5eb22",
  storageBucket: "hatch-5eb22.appspot.com",
  messagingSenderId: "635702900614",
  appId: "1:635702900614:web:e695ff556524bf18185e07",
  measurementId: "G-F3D1EDT54Q",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
