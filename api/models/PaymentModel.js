'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.User, { foreignKey: 'user_id' });
      Payment.belongsTo(models.Car, { foreignKey: 'car_id' });
    }
  }
  Payment.init(
    {
        amount: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        paymentMethod: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      }, {
        sequelize,
        modelName: 'Payment',
      }
  );


  return Payment;
};
