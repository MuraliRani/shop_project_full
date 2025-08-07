const { Product, OrderDetail, Order, Customer } = require("../models");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  await product.update(req.body);
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: "Not found" });
  await product.destroy();
  res.status(204).end();
};

exports.getCustomersByProductName = async (req, res) => {
  try {
    const { name } = req.params;

    const product = await Product.findOne({
      where: { name },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const customers = await Customer.findAll({
      include: {
        model: Order,
        include: {
          model: OrderDetail,
          where: { ProductID: product.id },
        },
      },
    });

    const response = customers.map((customer) => ({
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
    }));

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
