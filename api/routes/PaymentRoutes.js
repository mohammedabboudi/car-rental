const express = require('express');
const router = express.Router();
const db = require('../models');

// GET all payments
router.get('/payments', async (req, res) => {
  try {
    const payments = await db.Payment.findAll({
      include: [
        {
          model: db.Rental,
          include: [db.Car, db.User]
        }
      ]
    });
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET a single payment by ID
router.get('/payments/:paymentId', async (req, res) => {
  try {
    const payment = await db.Payment.findByPk(req.params.paymentId, {
      include: [
        {
          model: db.Rental,
          include: [db.Car, db.User]
        }
      ]
    });
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).send('Payment not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST a new payment
router.post('/payments', async (req, res) => {
  try {
    const { amount, rental_id } = req.body;
    const payment = await db.Payment.create({
      amount,
      rental_id
    });

    res.status(201).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// PUT an existing payment by ID
router.put('/payments/:paymentId', async (req, res) => {
  try {
    const { amount, rental_id } = req.body;
    const payment = await db.Payment.findByPk(req.params.paymentId);
    if (payment) {
      payment.amount = amount;
      payment.rental_id = rental_id;
      await payment.save();
      res.status(200).json(payment);
    } else {
      res.status(404).send('Payment not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// DELETE an existing payment by ID
router.delete('/payments/:paymentId', async (req, res) => {
  try {
    const payment = await db.Payment.findByPk(req.params.paymentId);
    if (payment) {
      await payment.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Payment not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;