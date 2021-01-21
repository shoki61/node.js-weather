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
  handler: (argv) => {
    geocode(argv.location, (error, data) => {
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
  },
});

yargs.parse();
