const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getAllCars, getCar, createCar, updateCar, deleteCar } = require('../controllers/CarController');
const { authorizeAcceess } = require('../middlewares/AuthorizeUser');


// configure multer :

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../client/uploads/cars')
    },
    filename: function (req, file, cb) {
      const fileName = Date.now() + '-' + file.originalname
      cb(null, fileName)
    }
  })

  const upload = multer({ storage: storage })

  
// GET /api/cars
router.get('/', authorizeAcceess, getAllCars);

// GET /api/cars/:carId
router.get('/:carId', authorizeAcceess, getCar);

// POST /api/cars
router.post('/', authorizeAcceess, upload.single('image'), createCar);

// PUT /api/cars/:carId
router.put('/:carId', authorizeAcceess, updateCar);

// DELETE /api/cars/:carId
router.delete('/:carId', authorizeAcceess, deleteCar);


module.exports = router;
