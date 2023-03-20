const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /api/employees
router.get('/', async (req, res) => {
  try {
    const employees = await db.Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// GET /api/employees/:employeeId
router.get('/:employeeId', async (req, res) => {
  try {
    const employee = await db.Employee.findByPk(req.params.employeeId);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// POST /api/employees
router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const employee = await db.Employee.create({
      first_name,
      last_name,
      email,
      password
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// PUT /api/employees/:employeeId
router.put('/:employeeId', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const employee = await db.Employee.findByPk(req.params.employeeId);
    if (employee) {
      employee.first_name = first_name;
      employee.last_name = last_name;
      employee.email = email;
      employee.password = password;
      await employee.save();
      res.status(200).json(employee);
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// DELETE /api/employees/:employeeId
router.delete('/:employeeId', async (req, res) => {
  try {
    const employee = await db.Employee.findByPk(req.params.employeeId);
    if (employee) {
      await employee.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
