const express = require("express");
const router = express.Router();
// Middlewares
//
// Controllers
const { bringAllProductsController } = require("../controllers/products.controllers");
// Routes Products
router.get("/temporal", bringAllProductsController);
// Add new Products

module.exports = router;
