const express = require('express');
const router = express.Router();


const { authentication } = require('../middlewares/AuthenticateUser');
const { login, logout, signup } = require('../controllers/AuthController');

router.post('/login', login, authentication);
router.post('/signup', signup);
router.delete('/logout', logout, (req, res)=>{ res.send(`OK YOU'RE NOW LOGED OUT`); });



module.exports = router;