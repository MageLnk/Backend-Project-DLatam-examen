const jwt = require("jsonwebtoken");
// Config
const { config } = require("../config/config");
// Services
const {
  addNewColorService,
  addNewColorToneService,
  deleteColorService,
  deleteColorToneService,
} = require("../services/adminProducts.services");
//
const controller = {};

// Add or Delete Stores

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

controller.deteleColorToneController = async (req, res) => {
  try {
    const colorToneId = req.body;
    const response = await deleteColorToneService(colorToneId);
    res.status(200).send({ results: response });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
