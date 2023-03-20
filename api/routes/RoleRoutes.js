// routes/roles.js

const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /api/roles
router.get('/', async (req, res) => {
  try {
    const roles = await db.Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET /api/roles/:roleId
router.get('/:roleId', async (req, res) => {
  try {
    const role = await db.Role.findByPk(req.params.roleId);
    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).send('Role not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST /api/roles
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const role = await db.Role.create({
      name
    });
    res.status(201).json(role);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// PUT /api/roles/:roleId
router.put('/:roleId', async (req, res) => {
  try {
    const { name } = req.body;
    const role = await db.Role.findByPk(req.params.roleId);
    if (role) {
      role.name = name;
      await role.save();
      res.status(200).json(role);
    } else {
      res.status(404).send('Role not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// DELETE /api/roles/:roleId
router.delete('/:roleId', async (req, res) => {
  try {
    const role = await db.Role.findByPk(req.params.roleId);
    if (role) {
      await role.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Role not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
