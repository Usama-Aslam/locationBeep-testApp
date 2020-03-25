import firebase from "../../config/firebase";
import _ from "lodash";
// import { store } from "../store";

import { createUserData } from "../../https/authneticate";
import { SHOW_LOADER, HIDE_LOADER, SIGN_IN } from "../types";

export const signIn = history => {
  return dispatch => {
    dispatch({ type: SHOW_LOADER, payload: true });

    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = _.pick(result.user, [
          "displayName",
          "photoURL",
          "email",
          "uid"
        ]);

        const data = { token, ...user };
        // ...
        createUserData(data)
          .then(res => {
            // console.log("createUser ka thens=>", res);
            dispatch({ type: SIGN_IN, payload: user });
            dispatch({ type: HIDE_LOADER, payload: false });
            history.replace("/map");
          })
          .catch(err => console.log("API Error:", err));
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
        dispatch({ type: HIDE_LOADER, payload: false });
      });
  };
};
