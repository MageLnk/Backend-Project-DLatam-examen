const jwt = require("jsonwebtoken");
// Config
const { config } = require("../config/config");
// Services
const { bringAllProductsService } = require("../services/products.services");
//
const controller = {};

// Test
controller.bringAllProductsController = async (req, res) => {
  try {
    const productsData = await bringAllProductsService();
    res.status(200).send({ status: "All good", results: productsData });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
