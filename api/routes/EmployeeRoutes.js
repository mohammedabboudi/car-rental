const express = require('express');
const router = express.Router();
const { getAllEmployee, getEmployee, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/EmployeeController');
const { authorization } = require('../middlewares/AuthorizeUser');

// GET /api/employees
router.get('/', authorization,getAllEmployee);

// GET /api/employees/:employeeId
router.get('/:employeeId', authorization,getEmployee);

// POST /api/employees
router.post('/', authorization,createEmployee);

// PUT /api/employees/:employeeId
router.put('/:employeeId', authorization,updateEmployee);

// DELETE /api/employees/:employeeId
router.delete('/:employeeId', authorization,deleteEmployee);

module.exports = router;
