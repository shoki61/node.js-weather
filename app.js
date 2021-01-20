const request = require('request');
const apis = require('./env');

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=-0.1275&appid=${apis.APIKEY_WEATHER}`;

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data)
});