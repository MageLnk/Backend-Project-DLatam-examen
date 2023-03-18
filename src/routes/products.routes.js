const express = require("express");
const router = express.Router();
// Middlewares
const { adminVerification, tokenVerification } = require("../middlewares/");
// Controllers
const { addNewColorController, bringAllProductsController } = require("../controllers/products.controllers");
// Routes Products
router.get("/test", bringAllProductsController);
// Add new Products
router.post("/new/color", tokenVerification, adminVerification, addNewColorController);

module.exports = router;
