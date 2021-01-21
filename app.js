const request = require("request");
const apis = require("./env");
const geocode = require("./utils/geocode");

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=-0.1275&appid=${apis.weather}`;

request({ url: url, json: true }, (error, response) => {
  if (error) console.log("Unable to connect to weather service!");
  else if (!response.body.current) console.log("Unable to find location!");
  else
    console.log(
      `It is currenly ${response.body.current.temp} degrees out. Humidity ${response.body.current.humidity}%`
    );
});

geocode("london", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
