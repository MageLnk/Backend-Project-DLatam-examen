const express = require("express");
const router = express.Router();
// Middlewares
const { tokenVerification, adminVerification, validateUserData, validateUserPassword } = require("../middlewares/");
// Controllers
const {
  updateUserData,
  loginUserController,
  bringUserDataController,
  createNewUserController,
  updatePasswordController,
  addNewColorController,
  addNewColorToneController,
  deleteColorController,
} = require("../controllers/admins.controllers");
// Routes Secret Services
router.post("/", createNewUserController); // Crear nuevo usuario
router.post("/login", loginUserController); // Logear usuario. Retorna solo el Token
router.get("/", tokenVerification, bringUserDataController); // Requiere Token
router.patch("/", tokenVerification, validateUserData, updateUserData); // Requiere Token y Body
router.patch("/password", tokenVerification, validateUserPassword, updatePasswordController); // Requiere Token y nueva contraseña

// Admins routes for adds new products
router.post("/new/color", tokenVerification, adminVerification, addNewColorController);
router.post("/new/colortone", tokenVerification, adminVerification, addNewColorToneController);

// Admins routes for delete products
router.delete("/delete/color", tokenVerification, adminVerification, deleteColorController);

module.exports = router;

// Las rutas para introducir y borrar tiendas y productos, tengo que ponerla acá.
