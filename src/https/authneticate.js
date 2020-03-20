const createUserData = data =>
  new Promise((resolve, reject) => {
    axios
      .get(``)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err.response.data);
      });
  });

export { createUserData };
