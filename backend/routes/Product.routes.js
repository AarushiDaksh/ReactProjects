const express = require("express");
const { insertProducts,getUserOrders, purchaseProduct } = require("../controllers/Product.controller");

const router = express.Router();

// Insert products in bulk
router.post("/insert", insertProducts);

// Purchase products
router.post("/purchase", purchaseProduct);
router.get("/orderhistory/:userId",getUserOrders);
module.exports = router;
