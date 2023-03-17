const express = require("express");
// Routes
const userRouter = require("./users.routes");
// Router
const router = express.Router();
// Create Routes
router.use("/user", userRouter);

module.exports = router;
