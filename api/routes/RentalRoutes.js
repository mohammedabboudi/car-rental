// routes/rentals.js

const express = require('express');
const router = express.Router();
const { Rental } = require('../models/RentalModel');
const { Car } = require('../models/CarModel');
const { User } = require('../models/UserModel');

// GET /api/rentals
router.get('/', async (req, res) => {
  try {
    const rentals = await Rental.findAll({
      include: [
        { model: Car },
        { model: User, as: 'renter' },
        { model: User, as: 'owner' }
      ]
    });
    res.status(200).json(rentals);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET /api/rentals/:rentalId
router.get('/:rentalId', async (req, res) => {
  try {
    const rental = await Rental.findByPk(req.params.rentalId, {
      include: [
        { model: Car },
        { model: User, as: 'renter' },
        { model: User, as: 'owner' }
      ]
    });
    if (rental) {
      res.status(200).json(rental);
    } else {
      res.status(404).send('Rental not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST /api/rentals
router.post('/', async (req, res) => {
  try {
    const { carId, renterId, startDate, endDate } = req.body;
    const rental = await Rental.create({
      carId,
      renterId,
      startDate,
      endDate
    });
    res.status(201).json(rental);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// PUT /api/rentals/:rentalId
router.put('/:rentalId', async (req, res) => {
  try {
    const { carId, renterId, startDate, endDate } = req.body;
    const rental = await Rental.findByPk(req.params.rentalId);
    if (rental) {
      rental.carId = carId;
      rental.renterId = renterId;
      rental.startDate = startDate;
      rental.endDate = endDate;
      await rental.save();
      res.status(200).json(rental);
    } else {
      res.status(404).send('Rental not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// DELETE /api/rentals/:rentalId
router.delete('/:rentalId', async (req, res) => {
  try {
    const rental = await Rental.findByPk(req.params.rentalId);
    if (rental) {
      await rental.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Rental not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
