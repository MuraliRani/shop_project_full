const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "Order",
    {
      OrderID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CustomerID: { type: DataTypes.INTEGER, allowNull: false },
      OrderD: { type: DataTypes.DATE, allowNull: true },
    },
    { timestamps: false }
  );
