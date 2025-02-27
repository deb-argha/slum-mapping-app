const asyncHandler = require('../middleware/async');
const locations = require('../routes/locations');

// @desc    Get all locations
// @route   GET /api/locations
exports.getLocations = asyncHandler(async (req, res) => {
  const locations = await Location.find().populate('community');
  res.status(200).json({ success: true, count: locations.length, data: locations });
});

// @desc    Create location
// @route   POST /api/locations
exports.createLocation = asyncHandler(async (req, res) => {
  const location = await Location.create(req.body);
  res.status(201).json({ success: true, data: location });
});