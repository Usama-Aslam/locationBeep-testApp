import firebase from "../../config/firebase";
import { store } from "../store";

// import { createUserData } from "../../https/authneticate";
import { SHOW_LOADER, HIDE_LOADER, SIGN_IN } from "../types";

export const signIn = async history => {
  store.dispatch({ type: SHOW_LOADER, payload: true });

  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("email");

  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        const data = { token, user };
        // ...
        console.log("result===>", user);
        store.dispatch({ type: SIGN_IN, payload: user });
        store.dispatch({ type: HIDE_LOADER, payload: false });
        // createUserData(data);
        resolve();
      })

      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error);
        store.dispatch({ type: HIDE_LOADER, payload: false });
        reject();
      });
  });
};
