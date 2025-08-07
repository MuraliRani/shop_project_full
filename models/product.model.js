module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    ProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ProductName: {
      type: DataTypes.STRING,
    },
    Price: {
      type: DataTypes.FLOAT,
    },
    CategoryID: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false, 
  });

  return Product;
};
