const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    try {
      let data = JSON.parse(body);
      callback(null, data[0].description);
    } catch (error) {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
