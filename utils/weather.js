const request = require("request");
const apis = require("../env");

const weather = (lat, lng, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apis.weather}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) callback("Unable to connect to weather service!", null);
    else if (!response.body.current) callback("Unable to find location!", null);
    else
      callback(
        null,
        `It is currenly ${
          response.body.current.temp - 273
        } degrees out. Humidity ${response.body.current.humidity}%`
      );
  });
};

module.exports = weather;
