const express = require("express");
const router = express.Router();
// Middlewares
// Acá van los import de los middlewares
// Controllers
const { createNewUserTest, loginUserTest, bringUserDataTest } = require("../controllers/users.controllers");
// Routes
router.post("/", createNewUserTest);

router.post("/login", loginUserTest);

router.get("/", bringUserDataTest);

module.exports = router;
