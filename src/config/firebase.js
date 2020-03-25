import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "key",
  authDomain: "task-login-pk.firebaseapp.com",
  databaseURL: "https://task-login-pk.firebaseio.com",
  projectId: "task-login-pk",
  storageBucket: "task-login-pk.appspot.com",
  messagingSenderId: "477711390020",
  appId: "key",
  measurementId: "key"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
