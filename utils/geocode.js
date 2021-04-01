const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicGl5dXNoc2luZ2hhbmlhIiwiYSI6ImNrbXg0cnhxdjA1MWUycHFranoycjl1emQifQ.NgVDFuRDdn6xkRxJ_HVp_A&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the geocoding service", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to get the location, try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;