const bcrypt = require("bcryptjs");
// DB's
const {
  models: { Color, ProductStore },
} = require("../models");
//

const products = {};

products.bringAllProductsService = async () => {
  try {
    const products = await ProductStore.findAll();

    return products;
    //return products.get({ raw: true });
  } catch (error) {
    throw error;
  }
};

products.addNewColorService = async ({ name }) => {
  try {
    const newColor = await Color.create({ name_color: name });
    return newColor.get({ raw: true });
  } catch (error) {
    throw error;
  }
};

module.exports = products;
