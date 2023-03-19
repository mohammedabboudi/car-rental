// routes/cars.js

const express = require('express');
const router = express.Router();
const { Car } = require('../models');

// GET /api/cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET /api/cars/:carId
router.get('/:carId', async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.carId);
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).send('Car not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST /api/cars
router.post('/', async (req, res) => {
  try {
    const { make, model, year, color, dailyRate, available } = req.body;
    const car = await Car.create({
      make,
      model,
      year,
      color,
      dailyRate,
      available
    });
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// PUT /api/cars/:carId
router.put('/:carId', async (req, res) => {
  try {
    const { make, model, year, color, dailyRate, available } = req.body;
    const car = await Car.findByPk(req.params.carId);
    if (car) {
      car.make = make;
      car.model = model;
      car.year = year;
      car.color = color;
      car.dailyRate = dailyRate;
      car.available = available;
      await car.save();
      res.status(200).json(car);
    } else {
      res.status(404).send('Car not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// DELETE /api/cars/:carId
router.delete('/:carId', async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.carId);
    if (car) {
      await car.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Car not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
