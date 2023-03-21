const express = require('express');
const router = express.Router();
const { getAllRoles, getRole, createRole, updateRole, deleteRole } = require('../controllers/RoleController');

// GET /api/roles
router.get('/', getAllRoles);

// GET /api/roles/:roleId
router.get('/:roleId', getRole);

// POST /api/roles
router.post('/', createRole);

// PUT /api/roles/:roleId
router.put('/:roleId', updateRole);

// DELETE /api/roles/:roleId
router.delete('/:roleId', deleteRole);

module.exports = router;
