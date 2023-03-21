const express = require('express');
const { getAllRentals, getRental, createRental, updateRental, deleteRental } = require('../controllers/RentalController');
const router = express.Router();

// GET /api/rentals
router.get('/', getAllRentals);

// GET /api/rentals/:rentalId
router.get('/:rentalId', getRental);

// POST /api/rentals
router.post('/', createRental);

// PUT /api/rentals/:rentalId
router.put('/:rentalId', updateRental);

// DELETE /api/rentals/:rentalId
router.delete('/:rentalId', deleteRental);

module.exports = router;
