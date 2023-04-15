const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/UserController');
const { authorization } = require('../middlewares/AuthorizeUser');

// GET /api/users
router.get('/', authorization, getAllUsers);

// GET /api/users/:userId
router.get('/:userId', authorization, getUser);

// POST /api/users
router.post('/', authorization, createUser);

// PUT /api/users/:userId
router.put('/:userId', authorization, updateUser);

// DELETE /api/users/:userId
router.delete('/:userId', authorization, deleteUser);

module.exports = router;
