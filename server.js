// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/UserRoutes');
const carRoutes = require('./api/routes/CarRoutes');
const rentalRoutes = require('./api/routes/RentalRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/rentals', rentalRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

