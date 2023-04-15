const express = require('express');
const router = express.Router();
const { getAllCars, getCar, createCar, updateCar, deleteCar } = require('../controllers/CarController');
const { authorization } = require('../middlewares/AuthorizeUser');


// GET /api/cars
router.get('/', authorization, getAllCars);

// GET /api/cars/:carId
router.get('/:carId', authorization, getCar);

// POST /api/cars
router.post('/', authorization, createCar);

// PUT /api/cars/:carId
router.put('/:carId', authorization, updateCar);

// DELETE /api/cars/:carId
router.delete('/:carId', authorization, deleteCar);


module.exports = router;
