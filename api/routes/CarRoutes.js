const express = require('express');
const router = express.Router();
const { getAllCars, getCar, createCar, updateCar, deleteCar } = require('../controllers/CarController');


// GET /api/cars
router.get('/', getAllCars);

// GET /api/cars/:carId
router.get('/:carId', getCar);

// POST /api/cars
router.post('/', createCar);

// PUT /api/cars/:carId
router.put('/:carId', updateCar);

// DELETE /api/cars/:carId
router.delete('/:carId', deleteCar);


module.exports = router;
