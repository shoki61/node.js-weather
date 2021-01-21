const request = require("request");
const apis = require("./env");

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=-0.1275&appid=${apis.weather}`;

request({ url: url, json: true }, (error, response) => {
  if (error) console.log("Unable to connect to weather service!");
  else if (!response.body.current) console.log("Unable to find location!");
  else
    console.log(
      `It is currenly ${response.body.current.temp} degrees out. Humidity ${response.body.current.humidity}%`
    );
});

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

geocode("london", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
