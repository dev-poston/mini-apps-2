const axios = require('axios');

module.exports = {
  get: (options, callback) => {
    axios.get(`http://localhost:3000/events?q=${options}`)
      .then((data) => {
        console.log('AXIOS REQ DATA: ', data);
        callback(data);
      })
      .catch((err) => {
        console.log('AXIOS REQ FAILED: ', err);
      });
  }
};