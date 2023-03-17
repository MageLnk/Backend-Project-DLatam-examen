const express = require("express");
const router = express.Router();
// Middlewares
//
// Controllers
const { bringAllProductsController } = require("../controllers/products.controllers");
// Routes User
router.get("/test", bringAllProductsController);

module.exports = router;
