const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/UserController');
const { authorizeAcceess } = require('../middlewares/AuthorizeUser');

// GET /api/users
router.get('/', authorizeAcceess, getAllUsers);

// GET /api/users/:userId
router.get('/:userId', authorizeAcceess, getUser);

// POST /api/users
router.post('/', authorizeAcceess, createUser);

// PUT /api/users/:userId
router.put('/:userId', authorizeAcceess, updateUser);

// DELETE /api/users/:userId
router.delete('/:userId', authorizeAcceess, deleteUser);

module.exports = router;
