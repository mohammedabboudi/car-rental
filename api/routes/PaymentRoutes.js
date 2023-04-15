const express = require('express');
const router = express.Router();
const { getAllPayments, getPayment, createPayment, updatePayment, deletePayment } = require('../controllers/PaymentController');
const { authorization } = require('../middlewares/AuthorizeUser');

// GET all payments
router.get('/payments', authorization, getAllPayments);

// GET a single payment by ID
router.get('/payments/:paymentId', authorization, getPayment);

// POST a new payment
router.post('/payments', authorization, createPayment);

// PUT an existing payment by ID
router.put('/payments/:paymentId', authorization, updatePayment);

// DELETE an existing payment by ID
router.delete('/payments/:paymentId', authorization, deletePayment);

module.exports = router;