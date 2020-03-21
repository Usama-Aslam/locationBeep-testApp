const admin = require("firebase-admin");
const _ = require("lodash");

module.exports = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Send response to OPTIONS requests
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  } else {
    const field = ["uid", "token", "displayName", "photoURL", "email"];
    const body = _.pick(req.body.data, field);
    console.log({ result: req.body.data });

    admin
      .database()
      .ref(`/user/${body.uid}`)
      .update({ ...body }, () => res.send({ success: true }));
  }
};
