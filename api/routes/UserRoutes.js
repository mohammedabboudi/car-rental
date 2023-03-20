const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET /api/users/:userId
router.get('/:userId', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.userId);
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
    const { first_name, last_name, email, password } = req.body;
    const user = await db.User.create({
      first_name,
      last_name,
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
    const { first_name, last_name, email, password } = req.body;
    const user = await db.User.findByPk(req.params.userId);
    if (user) {
      user.first_name = first_name;
      user.last_name = last_name;
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
    const user = await db.User.findByPk(req.params.userId);
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
