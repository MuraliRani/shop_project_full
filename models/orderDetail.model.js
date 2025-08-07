const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "OrderDetail",
    {
      OrderID: { type: DataTypes.INTEGER, primaryKey: true },
      ProductID: { type: DataTypes.INTEGER, primaryKey: true },
      Quantity: { type: DataTypes.INTEGER, allowNull: true },
    },
    { timestamps: false }
  );
