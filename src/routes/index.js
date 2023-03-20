const express = require("express");
// Routes
const userRouter = require("./users.routes");
const productsRouter = require("./products.routes");
const adminUsersRouter = require("./adminUsers.routes");
const adminProductsRouter = require("./adminProducts.routes");

// Router
const router = express.Router();
// Create Routes
router.use("/user", userRouter);
router.use("/products", productsRouter);
router.use("/secretservice", adminUsersRouter);
router.use("/secretoperations", adminProductsRouter);

module.exports = router;
