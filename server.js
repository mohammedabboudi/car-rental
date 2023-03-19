// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/users');
const carRoutes = require('./routes/cars');
const rentalRoutes = require('./routes/rentals');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/rentals', rentalRoutes);

// Start server
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
