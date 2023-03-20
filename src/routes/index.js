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

//const apiMockett = {
//  status: "All good",
//  results: [
//    {
//      category: "Pintura de uñas",
//      results: [
//        {
//          product: {
//            category: "Pintura de uñas",
//            results: [{ nombre: "Pintura de uñas marca acme", color: "Azul", tono: "Azul claro", cantidad: 15 }],
//          },
//        },
//        {
//          product: {
//            category: "Pintura de uñas",
//            results: [{ nombre: "Pintura de uñas marca acme", color: "Azul", tono: "Azul oscuro", cantidad: 10 }],
//          },
//        },
//      ],
//    },
//    {
//      category: "Pintura para el pelo",
//      results: [
//        {
//          product: {
//            category: "Pintura para el pelo",
//            results: [{ nombre: "Pintura para el pelo marca acme", color: "Rojo", tono: "Azul claro", cantidad: 15 }],
//          },
//        },
//        {
//          product: {
//            category: "Pintura para el pelo",
//            results: [{ nombre: "Pintura para el pelo marca acme", color: "Rojo", tono: "Azul oscuro", cantidad: 10 }],
//          },
//        },
//      ],
//    },
//  ],
//};
//
