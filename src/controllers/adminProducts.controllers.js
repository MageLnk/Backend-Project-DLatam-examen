// Services
const {
  addNewStoreService,
  addNewColorService,
  addNewProducteService,
  addNewColorToneService,
  addNewProductsStoreService,
  deleteStoreService,
  deleteColorService,
  deleteProductService,
  deleteColorToneService,
  deleteProductsStoreService,
} = require("../services/adminProducts.services");
//
const controller = {};

// Add or Delete Stores
controller.addNewStoreController = async (req, res) => {
  try {
    const newStoreName = req.body;
    const response = await addNewStoreService(newStoreName);
    res.status(200).send({ status: "All good", results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.deleteStoreController = async (req, res) => {
  try {
    const storeId = req.body;
    const response = await deleteStoreService(storeId);
    res.status(200).send({ results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

// Add new stuff
controller.addNewColorController = async (req, res) => {
  try {
    const newColorName = req.body;
    const response = await addNewColorService(newColorName);
    res.status(200).send({ status: "All good", results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.addNewProductController = async (req, res) => {
  try {
    const NewProduct = req.body;
    const response = await addNewProducteService(NewProduct);
    res.status(200).send({ status: "All good", results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.addNewColorToneController = async (req, res) => {
  try {
    const newColorToneName = req.body;
    const response = await addNewColorToneService(newColorToneName);
    res.status(200).send({ status: "All good", results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.addNewProductsStoreController = async (req, res) => {
  try {
    const newProductsStore = req.body;
    const response = await addNewProductsStoreService(newProductsStore);
    res.status(200).send({ status: "All good", results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

// Delete stuff
controller.deleteColorController = async (req, res) => {
  try {
    const colorId = req.body;
    const response = await deleteColorService(colorId);
    res.status(200).send({ results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.deleteProductController = async (req, res) => {
  try {
    const productId = req.body;
    const response = await deleteProductService(productId);
    res.status(200).send({ results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.deleteColorToneController = async (req, res) => {
  try {
    const colorToneId = req.body;
    const response = await deleteColorToneService(colorToneId);
    res.status(200).send({ results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.deleteProductsStoreController = async (req, res) => {
  try {
    const productsStoreId = req.body;
    const response = await deleteProductsStoreService(productsStoreId);
    res.status(200).send({ results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
