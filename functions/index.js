const admin = require("firebase-admin");
const functions = require("firebase-functions");

//localfiles
const createUser = require("./create_user");
const serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://task-login-pk.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
