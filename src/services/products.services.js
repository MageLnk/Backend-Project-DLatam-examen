const bcrypt = require("bcryptjs");
// DB's
const {
  models: { ProductStore },
} = require("../models");
//

const users = {};

users.bringAllProductsService = async () => {
  try {
    const products = await ProductStore.findAll();

    return products;
    //return products.get({ raw: true });
  } catch (error) {
    throw error;
  }
};

module.exports = users;
