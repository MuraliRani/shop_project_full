
const { OrderDetail } = require("../models");

exports.createOrderDetail = async (req, res) => {
  try {
    const detail = await OrderDetail.create(req.body);
    res.status(201).json(detail);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrderDetails = async (req, res) => {
  const details = await OrderDetail.findAll();
  res.json(details);
};

exports.getOrderDetail = async (req, res) => {
  const detail = await OrderDetail.findOne({ where: { OrderID: req.params.orderId, ProductID: req.params.productId } });
  if (!detail) return res.status(404).json({ error: "Not found" });
  res.json(detail);
};

exports.updateOrderDetail = async (req, res) => {
  const detail = await OrderDetail.findOne({ where: { OrderID: req.params.orderId, ProductID: req.params.productId } });
  if (!detail) return res.status(404).json({ error: "Not found" });
  await detail.update(req.body);
  res.json(detail);
};

exports.deleteOrderDetail = async (req, res) => {
  const detail = await OrderDetail.findOne({ where: { OrderID: req.params.orderId, ProductID: req.params.productId } });
  if (!detail) return res.status(404).json({ error: "Not found" });
  await detail.destroy();
  res.status(204).end();
};
