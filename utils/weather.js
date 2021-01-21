const request = require("request");
const { weatherApi } = require("../env");

const weather = (lat, lng, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${weatherApi}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) callback("Unable to connect to weather service!", null);
    else if (!body.current) callback("Unable to find location!", null);
    else
      callback(
        null,
        `It is currenly ${
          body.current.temp - 273
        } degrees out. Humidity ${body.current.humidity}%`
      );
  });
};

module.exports = weather;
