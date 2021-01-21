const request = require("request");
const { geocodeApi } = require("../env");

const geocode = (address, callback) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geocodeApi}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location service!", null);
    } else if (!body.results.length) {
      callback("Unable to find location! Try another search.", null);
    } else {
      callback(null, {
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng,
        location: body.results[0].formatted_address,
      });
    }
  });
};

module.exports = geocode;
