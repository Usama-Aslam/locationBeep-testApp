import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDTesYc6zp_GQMJpL1UajCRY75YiYmC8U",
  authDomain: "task-login-pk.firebaseapp.com",
  databaseURL: "https://task-login-pk.firebaseio.com",
  projectId: "task-login-pk",
  storageBucket: "task-login-pk.appspot.com",
  messagingSenderId: "477711390020",
  appId: "1:477711390020:web:0066cfbffb06b5a946b311",
  measurementId: "G-E2NFJTFLQD"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
