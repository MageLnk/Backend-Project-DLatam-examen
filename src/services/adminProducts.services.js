const bcrypt = require("bcryptjs");
// DB's
const {
  models: { Color, ColorTones },
} = require("../models");
//

const adminsProducts = {};

// handle Stores

// Add new stuff

adminsProducts.addNewColorService = async ({ name }) => {
  try {
    const newColor = await Color.create({ name_color: name });
    return newColor.get({ raw: true });
  } catch (error) {
    throw error;
  }
};

adminsProducts.addNewColorToneService = async ({ name, id_color }) => {
  try {
    const newColorTone = await ColorTones.create({ name_color_tone: name, id_color });
    return newColorTone.get({ raw: true });
  } catch (error) {
    throw error;
  }
};

// Delete stuff

adminsProducts.deleteColorService = async ({ id_color }) => {
  try {
    const deletedColor = await Color.destroy({ where: { id_color } });
    if (deletedColor === 0) throw `El color con el ID ${id_color} que está intentando borrar, no existe`;
    return `El color de id '${id_color}' fue borrado con éxito`;
  } catch (error) {
    throw error;
  }
};

adminsProducts.deleteColorToneService = async ({ id_color_tone }) => {
  try {
    const deletedColor = await ColorTones.destroy({ where: { id_color_tone } });
    if (deletedColor === 0) throw `El tono de color con el ID ${id_color_tone} que está intentando borrar, no existe`;
    return `El tono de color de id '${id_color_tone}' fue borrado con éxito`;
  } catch (error) {
    throw error;
  }
};

module.exports = adminsProducts;
