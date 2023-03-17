const express = require("express");
const router = express.Router();
// Middlewares
const { tokenVerification, validateUserData } = require("../middlewares/");
// Controllers
const {
  createNewUserController,
  loginUserController,
  bringUserDataController,
  updateUserData,
} = require("../controllers/users.controllers");
// Routes User
router.post("/", createNewUserController); // Crear nuevo usuario
router.post("/login", loginUserController); // Logear usuario. Retorna solo el Token
router.get("/", tokenVerification, bringUserDataController); // Requiere Token
router.patch("/", tokenVerification, validateUserData, updateUserData); // Requiere Token y Body

module.exports = router;
