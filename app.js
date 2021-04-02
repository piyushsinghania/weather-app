const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];

if (!address) {
  console.log("Please provide a location");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log("Error: ", error);
    }
    forecast(data.latitude, data.longitude, (error, forecast) => {
      if (error) {
        return console.log("Error:", error);
      }
      console.log(data.location);
      console.log(forecast);
    });
  });
}
