'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // define association here
    }
  };
  Employee.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    date_of_hire: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    job_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};




