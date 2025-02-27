const axios = require('axios');
const ErrorResponse = require('./errorResponse');

const submitToGovernment = asyncHandler(async (data) => {
  try {
    const response = await axios.post(process.env.GOV_API_ENDPOINT, data, {
      headers: {
        'Authorization': `Bearer ${process.env.GOV_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (err) {
    throw new ErrorResponse('Government API integration failed', 500);
  }
});

module.exports = { submitToGovernment };