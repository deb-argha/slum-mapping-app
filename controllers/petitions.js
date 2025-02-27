const asyncHandler = require('../middleware/async');
const Petition = require('../models/Petition');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all petitions
// @route   GET /api/petitions
exports.getPetitions = asyncHandler(async (req, res) => {
  const petitions = await Petition.find().populate('community user');
  res.status(200).json({ success: true, count: petitions.length, data: petitions });
});

// @desc    Create petition
// @route   POST /api/petitions
exports.createPetition = asyncHandler(async (req, res) => {
  req.body.user = req.user.id;
  const petition = await Petition.create(req.body);
  res.status(201).json({ success: true, data: petition });
});

// @desc    Update petition status
// @route   PUT /api/petitions/:id
exports.updatePetition = asyncHandler(async (req, res) => {
  let petition = await Petition.findById(req.params.id);
  if (!petition) {
    return next(new ErrorResponse(`Petition not found with id ${req.params.id}`, 404));
  }
  petition = await Petition.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json({ success: true, data: petition });
});