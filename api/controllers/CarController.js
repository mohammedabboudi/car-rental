const db = require('../models');


async function getAllCars(req, res){

        try {
          const cars = await db.Car.findAll();
          res.status(200).json(cars);
        } catch (error) {
          console.error(error);
          res.status(500).send('Server Error');
        }
}



async function getCar(req, res){
    try {
      const car = await db.Car.findByPk(req.params.carId);
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
  


async function createCar(req, res){
    try {
      const { make, model, year, color, dailyRate, available } = req.body;
      const car = await db.Car.create({
        make,
        model,
        year,
        color,
        dailyRate,
        available
      });
      res.status(201).json(car);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
  
  

async function updateCar(req, res){
    try {
      const { make, model, year, color, dailyRate, available } = req.body;
      const car = await db.Car.findByPk(req.params.carId);
      if (car) {
        car.make = make;
        car.model = model;
        car.year = year;
        car.color = color;
        car.dailyRate = dailyRate;
        car.available = available;
        await car.save();
        res.status(200).json(car);
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
  


async function deleteCar(req, res){
    try {
      const car = await db.Car.findByPk(req.params.carId);
      if (car) {
        await car.destroy();
        res.status(204).send();
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }



module.exports = {

    getAllCars,
    getCar,
    createCar,
    updateCar,
    deleteCar

}