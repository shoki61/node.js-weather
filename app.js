const request = require('request');
const apis = require('./env');

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=-0.1275&appid=${apis.weather}`;

request({ url: url, json: true }, (error, response) => {
    console.log(`It is currenly ${response.body.current.temp} degrees out. Humidity ${response.body.current.humidity}%`);
});

const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=london&key=${apis.geocode}`;

request({ url: geocodeURL, json: true }, (error, response) => {
    console.log(response.body.results[0].geometry.location);
});
