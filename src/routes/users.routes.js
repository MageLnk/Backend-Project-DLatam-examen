const express = require("express");
const router = express.Router();
// Middlewares
const { tokenVerification } = require("../middlewares/");
// Controllers
const {
  createNewUserController,
  loginUserController,
  bringUserDataTestController,
} = require("../controllers/users.controllers");
// Routes
router.post("/", createNewUserController);

router.post("/login", loginUserController);

router.get("/", tokenVerification, bringUserDataTestController);

module.exports = router;
