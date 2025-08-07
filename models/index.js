const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// ✅ Pass both sequelize and DataTypes to all models
const Customer = require("./customer.model")(sequelize, DataTypes);
const Order = require("./order.model")(sequelize, DataTypes);
const Product = require("./product.model")(sequelize, DataTypes);
const Category = require("./category.model")(sequelize, DataTypes);
const OrderDetail = require("./orderDetail.model")(sequelize, DataTypes);


Customer.hasMany(Order, { foreignKey: "CustomerID", onDelete: "CASCADE" });
Order.belongsTo(Customer, { foreignKey: "CustomerID" });

Category.hasMany(Product, { foreignKey: "CategoryID", onDelete: "SET NULL" });
Product.belongsTo(Category, { foreignKey: "CategoryID" });

Order.belongsToMany(Product, {
  through: OrderDetail,
  foreignKey: "OrderID",
  otherKey: "ProductID",
  onDelete: "CASCADE",
});
Product.belongsToMany(Order, {
  through: OrderDetail,
  foreignKey: "ProductID",
  otherKey: "OrderID",
  onDelete: "CASCADE",
});

OrderDetail.belongsTo(Order, { foreignKey: "OrderID" });
OrderDetail.belongsTo(Product, { foreignKey: "ProductID" });

sequelize
  .sync({ alter: true })
  .then(() => console.log("All models synced successfully!"))
  .catch((err) => console.error("Error syncing models:", err));

module.exports = {
  sequelize,
  Customer,
  Order,
  Product,
  Category,
  OrderDetail,
};
