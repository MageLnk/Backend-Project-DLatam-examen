const express = require("express");
const router = express.Router();
// Middlewares
const { tokenVerification, adminVerification } = require("../middlewares");
// Controllers
const {
  addNewStoreController,
  addNewColorController,
  addNewProductController,
  addNewColorToneController,
  addNewProductsStoreController,
  deleteColorController,
  deleteStoreController,
  deleteProductController,
  deleteColorToneController,
  deleteProductsStoreController,
} = require("../controllers/adminProducts.controllers");

// Admins routes for adds or delete stores
router.post("/new/store", tokenVerification, adminVerification, addNewStoreController);
router.delete("/delete/store", tokenVerification, adminVerification, deleteStoreController);

// Admins routes for adds new products
router.post("/new/color", tokenVerification, adminVerification, addNewColorController);
router.post("/new/colortone", tokenVerification, adminVerification, addNewColorToneController);
router.post("/new/product", tokenVerification, adminVerification, addNewProductController);
router.post("/new/products_stores", tokenVerification, adminVerification, addNewProductsStoreController);

// Admins routes for delete products
router.delete("/delete/color", tokenVerification, adminVerification, deleteColorController);
router.delete("/delete/colortone", tokenVerification, adminVerification, deleteColorToneController);
router.delete("/delete/product", tokenVerification, adminVerification, deleteProductController);
router.delete("/delete/products_stores", tokenVerification, adminVerification, deleteProductsStoreController);

module.exports = router;

// Las rutas para introducir y borrar tiendas y productos, tengo que ponerla acá.
