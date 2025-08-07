const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "Category",
    {
      CategoryID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CategoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
