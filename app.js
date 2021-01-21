const geocode = require("./utils/geocode");
const weather = require("./utils/weather");


geocode("gaziantep", (error, data) => {
  if (error) {
    return console.log(error);
  }
  weather(data.latitude, data.longitude, (error, weatherData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(weatherData);
  });
});
