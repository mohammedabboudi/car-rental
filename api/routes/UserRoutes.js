// routes/users.js

const express = require('express');
const router = express.Router();
const { User } = require('../models/UserModel');

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET /api/users/:userId
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// PUT /api/users/:userId
router.put('/:userId', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findByPk(req.params.userId);
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.password = password;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// DELETE /api/users/:userId
router.delete('/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
