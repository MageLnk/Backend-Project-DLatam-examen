const express = require("express");
// Routes
const userRouter = require("./users.routes");
const productsRouter = require("./products.routes");
// Router
const router = express.Router();
// Create Routes
router.use("/user", userRouter);
router.use("/products", productsRouter);

module.exports = router;
