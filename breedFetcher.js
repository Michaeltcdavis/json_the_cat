const breed = process.argv.splice(2);

const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(URL, (error, response, body) => {
  if (error) {
    console.log('Something went wrong: ', error);
    return;
  }
  try {
    let data = JSON.parse(body);
    console.log(data[0].description);
  } catch (error) {
    console.log('ERROR: Breed not found');
  }
});