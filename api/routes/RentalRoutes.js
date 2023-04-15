const express = require('express');
const { getAllRentals, getRental, createRental, updateRental, deleteRental } = require('../controllers/RentalController');
const { authorization } = require('../middlewares/AuthorizeUser');
const router = express.Router();

// GET /api/rentals
router.get('/', authorization, getAllRentals);

// GET /api/rentals/:rentalId
router.get('/:rentalId', authorization, getRental);

// POST /api/rentals
router.post('/', authorization, createRental);

// PUT /api/rentals/:rentalId
router.put('/:rentalId', authorization, updateRental);

// DELETE /api/rentals/:rentalId
router.delete('/:rentalId', authorization, deleteRental);

module.exports = router;
