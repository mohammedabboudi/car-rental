const express = require('express');
const router = express.Router();
const { getAllRoles, getRole, createRole, updateRole, deleteRole } = require('../controllers/RoleController');
const { authorization } = require('../middlewares/AuthorizeUser');

// GET /api/roles
router.get('/', authorization, getAllRoles);

// GET /api/roles/:roleId
router.get('/:roleId', authorization, getRole);

// POST /api/roles
router.post('/', createRole);

// PUT /api/roles/:roleId
router.put('/:roleId', authorization, updateRole);

// DELETE /api/roles/:roleId
router.delete('/:roleId', authorization, deleteRole);

module.exports = router;
