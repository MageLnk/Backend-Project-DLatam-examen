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

const algo = [
  {
    id: "01",
    name: "White & Gray & Black – Gel Polish 7.3ml",
    img: "https://canni.cl/wp-content/uploads/2022/11/blanco-300x300.webp",
    alt: "Esmalte 01",
    price: "6800",
    category: "Esmalte",
    desc: "Prueba 01",
  },
  {
    id: "02",
    name: "Rose Red – Gel Polish 7.3ml",
    img: "https://canni.cl/wp-content/uploads/2022/11/rose-300x300.webp",
    alt: "Esmalte 02",
    price: "6500",
    category: "Esmalte",
    desc: "Prueba 02",
  },
  {
    id: "03",
    name: "Gold & Yellow – Gel Polish 7.3ml",
    img: "https://canni.cl/wp-content/uploads/2022/11/oro_amarillo-300x300.webp",
    alt: "Esmalte 03",
    price: "6800",
    category: "Esmalte",
    desc: "Prueba 03",
  },
  {
    id: "04",
    name: "Red – Gel Polish 7.3ml",
    img: "https://canni.cl/wp-content/uploads/2022/11/rojo-300x300.webp",
    alt: "Esmalte 04",
    price: "6500",
    category: "Esmalte",
    desc: "Prueba 04",
  },
];

/*
Me gustaría ponerle stock a cada producto según su tono de color. Y muchas otras cosas. Pero entiendo
que para el requerimiento del sitio. Es todo lo que se necesita
*/
