const express = require("express");
const router = express.Router();
// Middlewares
const { tokenVerification, adminVerification } = require("../middlewares");
// Controllers
const {
  addNewColorController,
  addNewColorToneController,
  deleteColorController,
  deteleColorToneController,
} = require("../controllers/adminProducts.controllers");

// Admins routes for adds or delete stores

// Admins routes for adds new products
router.post("/new/color", tokenVerification, adminVerification, addNewColorController);
router.post("/new/colortone", tokenVerification, adminVerification, addNewColorToneController);

// Admins routes for delete products
router.delete("/delete/color", tokenVerification, adminVerification, deleteColorController);
router.delete("/delete/colortone", tokenVerification, adminVerification, deteleColorToneController);

module.exports = router;

// Las rutas para introducir y borrar tiendas y productos, tengo que ponerla acá.
