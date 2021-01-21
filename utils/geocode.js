const request = require("request");
const apis = require("../env");

const geocode = (address, callback) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apis.geocode}`;
  console.log(address);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location service!", null);
    } else if (!response.body.results.length) {
      callback("Unable to find location! Try another search.", null);
    } else {
      callback(null, {
        latitude: response.body.results[0].geometry.location.lat,
        longitude: response.body.results[0].geometry.location.lng,
        location: response.body.results[0].formatted_address,
      });
    }
  });
};

module.exports = geocode;
