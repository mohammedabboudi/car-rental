const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/UserController')

// GET /api/users
router.get('/', getAllUsers);

// GET /api/users/:userId
router.get('/:userId', getUser);

// POST /api/users
router.post('/', createUser);

// PUT /api/users/:userId
router.put('/:userId', updateUser);

// DELETE /api/users/:userId
router.delete('/:userId', deleteUser);

module.exports = router;
