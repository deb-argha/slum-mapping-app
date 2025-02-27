const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { getPetitions, createPetition, updatePetition } = require('../controllers/petitions');

router.route('/')
  .get(protect, getPetitions)
  .post(protect, createPetition);

router.route('/:id')
  .put(protect, authorize('admin'), updatePetition);

module.exports = router;