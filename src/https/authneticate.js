import axios from "axios";

const createUserData = data => {
  return new Promise((resolve, reject) => {
    axios
      .post("https://us-central1-task-login-pk.cloudfunctions.net/createUser", {
        data
      })
      .then(res => {
        console.log("request ka then===>", res);
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export { createUserData };
