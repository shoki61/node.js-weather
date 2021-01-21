const geocode = require("./utils/geocode");
const weather = require("./utils/weather");

geocode("london", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

weather(51.5073509, -0.1277583, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
