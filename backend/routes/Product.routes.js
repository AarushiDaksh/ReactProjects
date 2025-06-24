const express = require("express");
const { insertProducts, purchaseProduct } = require("../controllers/Product.controller");

const router = express.Router();

// Insert products in bulk
router.post("/insert", insertProducts);

// Purchase products
router.post("/purchase", purchaseProduct);

module.exports = router;
