const db = require('../models');



async function getAllEmployee(req, res){
    try {
      const employees = await db.Employee.findAll();
      res.status(200).json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
  
 

async function getEmployee(req, res){
    try {
      const employee = await db.Employee.findByPk(req.params.employeeId);
      if (employee) {
        res.status(200).json(employee);
      } else {
        res.status(404).send('Employee not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
  


async function createEmployee(req, res){
    try {
      const { first_name, last_name, email, password } = req.body;
      const employee = await db.Employee.create({
        first_name,
        last_name,
        email,
        password
      });
  
      res.status(201).json(employee);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
  
  

async function updateEmployee(req, res){
    try {
      const { first_name, last_name, email, password } = req.body;
      const employee = await db.Employee.findByPk(req.params.employeeId);
      if (employee) {
        employee.first_name = first_name;
        employee.last_name = last_name;
        employee.email = email;
        employee.password = password;
        await employee.save();
        res.status(200).json(employee);
      } else {
        res.status(404).send('Employee not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
  


async function deleteEmployee(req, res){
    try {
      const employee = await db.Employee.findByPk(req.params.employeeId);
      if (employee) {
        await employee.destroy();
        res.status(204).send();
      } else {
        res.status(404).send('Employee not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
  

module.exports = {

    getAllEmployee,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
    
}