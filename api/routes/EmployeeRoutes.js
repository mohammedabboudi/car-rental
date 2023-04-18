const express = require('express');
const router = express.Router();
const { getAllEmployee, getEmployee, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/EmployeeController');
const { authorizeAcceess } = require('../middlewares/AuthorizeUser');

// GET /api/employees
router.get('/', authorizeAcceess,getAllEmployee);

// GET /api/employees/:employeeId
router.get('/:employeeId', authorizeAcceess,getEmployee);

// POST /api/employees
router.post('/', authorizeAcceess,createEmployee);

// PUT /api/employees/:employeeId
router.put('/:employeeId', authorizeAcceess,updateEmployee);

// DELETE /api/employees/:employeeId
router.delete('/:employeeId', authorizeAcceess,deleteEmployee);

module.exports = router;
