// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/UserRoutes');
const carRoutes = require('./api/routes/CarRoutes');
const rentalRoutes = require('./api/routes/RentalRoutes');
const employeeRoutes = require('./api/routes/EmployeeRoutes');
const paymentRoutes = require('./api/routes/PaymentRoutes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// API routes
app.use('/api/user', userRoutes);
app.use('/api/car', carRoutes);
app.use('/api/rental', rentalRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/payment', paymentRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

