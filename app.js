const express = require("express");
const app = express();
const { sequelize } = require("./models");
require("dotenv").config();

app.use(express.json());

app.use("/api/customers", require("./routes/customer.routes"));
app.use("/api/orders", require("./routes/order.routes"));
app.use("/api/products", require("./routes/product.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use('/api/orderdetails', require('./routes/orderDetail.routes'));


sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
