const admin = require("firebase-admin");
const functions = require("firebase-functions");
const serviceAccount = require("./service_account.json");

//localfiles
const createUser = require("./createUser.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://task-login-pk.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
