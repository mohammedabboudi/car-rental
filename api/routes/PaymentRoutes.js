const express = require('express');
const router = express.Router();
const { getAllPayments, getPayment, createPayment, updatePayment, deletePayment } = require('../controllers/PaymentController');

// GET all payments
router.get('/payments', getAllPayments);

// GET a single payment by ID
router.get('/payments/:paymentId', getPayment);

// POST a new payment
router.post('/payments', createPayment);

// PUT an existing payment by ID
router.put('/payments/:paymentId', updatePayment);

// DELETE an existing payment by ID
router.delete('/payments/:paymentId', deletePayment);

module.exports = router;