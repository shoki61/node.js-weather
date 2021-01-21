const request = require("request");
const apis = require("./env");


const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=london&key=${apis.geocode}`;

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) console.log("Unable to connect to weather service!");
  else if (!response.body.results.length)
    console.log("Unable to find location. Try another search!");
  else {
    console.log(response.body.results[0].geometry.location);
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=-0.1275&appid=${apis.weather}`;
    request({ url: url, json: true }, (error, response) => {
      if (error) console.log("Unable to connect to weather service!");
      else if (!response.body.current) console.log("Unable to find location!");
      else
        console.log(
          `It is currenly ${response.body.current.temp} degrees out. Humidity ${response.body.current.humidity}%`
        );
    });
  }
});
