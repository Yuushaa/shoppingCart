const axios = require('axios');
const querystring = require('querystring');

module.exports.get = (url, res) => {
  axios.get(url).then((result) => {
    res.send(result.data);
  }).catch((error) => {
    res.send('Error');
  });
};

module.exports.post = (url, data, res) => {
  const params = querystring.stringify(data);
  axios.post(url, params).then((result) => {
    res.send(result.data);
  }).catch((error) => {
    res.send('Error');
  });
};
