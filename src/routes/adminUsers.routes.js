const express = require("express");
const router = express.Router();
// Middlewares
const { tokenVerification, validateUserData, validateUserPassword } = require("../middlewares");
// Controllers
const {
  updateUserData,
  loginUserController,
  bringUserDataController,
  createNewUserController,
  updatePasswordController,
} = require("../controllers/adminUsers.controllers");
// Routes Secret Services
router.post("/", createNewUserController); // Crear nuevo usuario
router.post("/login", loginUserController); // Logear usuario. Retorna solo el Token
router.get("/", tokenVerification, bringUserDataController); // Requiere Token
router.patch("/", tokenVerification, validateUserData, updateUserData); // Requiere Token y Body
router.patch("/password", tokenVerification, validateUserPassword, updatePasswordController); // Requiere Token y nueva contraseña

module.exports = router;

// Las rutas para introducir y borrar tiendas y productos, tengo que ponerla acá.
