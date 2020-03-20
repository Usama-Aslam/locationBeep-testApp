const admin = require("firebase-admin");
const _ = require("lodash");

module.exports = function(req, res) {
  const field = ["uid", "name", "token"];
  const body = _.pick(req.body);

  if (!body.uid || !body.name || !body.token)
    return res.status(422).send({ error: "Error in CreateUser" });

  admin
    .database()
    .ref(`users/${uid}`)
    .update({ name: body.name }, () => {
      res.status(200).send({ success: true });
    });
};
