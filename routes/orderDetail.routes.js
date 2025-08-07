
const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderDetail.controller");

router.post("/", controller.createOrderDetail);
router.get("/", controller.getOrderDetails);
router.get("/:orderId/:productId", controller.getOrderDetail);
router.put("/:orderId/:productId", controller.updateOrderDetail);
router.delete("/:orderId/:productId", controller.deleteOrderDetail);

module.exports = router;
