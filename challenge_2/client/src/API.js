const axios = require('axios');

module.exports = {
  get: (callback) => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((data) => {
        callback(data);
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err);
      })
  }
}