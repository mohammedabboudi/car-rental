const express = require('express');
const router = express.Router();
const { getAllEmployee, getEmployee, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/EmployeeController');

// GET /api/employees
router.get('/', getAllEmployee);

// GET /api/employees/:employeeId
router.get('/:employeeId', getEmployee);

// POST /api/employees
router.post('/', createEmployee);

// PUT /api/employees/:employeeId
router.put('/:employeeId', updateEmployee);

// DELETE /api/employees/:employeeId
router.delete('/:employeeId', deleteEmployee);

module.exports = router;
