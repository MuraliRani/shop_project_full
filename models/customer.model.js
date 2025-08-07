const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "Customer",
    {
      CustomerID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      FirstName: { type: DataTypes.STRING(100), allowNull: true },
      LastName: { type: DataTypes.STRING(100), allowNull: true },
      Email: { type: DataTypes.STRING(255), allowNull: true },
    },
    { timestamps: false }
  );
