const yargs = require("yargs");

const geocode = require("./utils/geocode");
const weather = require("./utils/weather");

yargs.command({
  command: "get",
  describe: "Brings up the weather of the region you're looking for",
  builder: {
    location: {
      describe: "Get location weather",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ location }) => {
    geocode(location, (error, { latitude, longitude, location }) => {
      if (error) {
        return console.log(error);
      }
      weather(latitude, longitude, (error, weatherData) => {
        if (error) {
          return console.log(error);
        }
        console.log(location);
        console.log(weatherData);
      });
    });
  },
});

yargs.parse();
