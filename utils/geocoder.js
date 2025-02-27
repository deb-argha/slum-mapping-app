const NodeGeocoder = require('node-geocoder');
const ErrorResponse = require('./errorResponse');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);

const getLocationCoords = asyncHandler(async (address) => {
  const loc = await geocoder.geocode(address);
  if (!loc.length) {
    throw new ErrorResponse('No location found', 404);
  }
  return {
    latitude: loc[0].latitude,
    longitude: loc[0].longitude,
    formattedAddress: loc[0].formattedAddress
  };
});

module.exports = getLocationCoords;