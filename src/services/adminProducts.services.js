const bcrypt = require("bcryptjs");
// DB's
const {
  models: { Store, Color, Product, ProductStore, ColorTones },
} = require("../models");
//

const adminsProducts = {};

// handle Stores
adminsProducts.addNewStoreService = async ({ name, address_store }) => {
  try {
    const newStore = await Store.create({ name_store: name, address_store });
    return newStore.get({ raw: true });
  } catch (error) {
    throw error;
  }
};

adminsProducts.deleteStoreService = async ({ id_store }) => {
  try {
    const deleteStore = await Store.destroy({ where: { id_store } });
    if (deleteStore === 0) throw `La tienda con el ID ${id_store} que está intentando borrar, no existe`;
    return `La tienda con el id '${id_store}' fue borrado con éxito`;
  } catch (error) {
    throw error;
  }
};

// Add new stuff

adminsProducts.addNewColorService = async ({ name }) => {
  try {
    const newColor = await Color.create({ name_color: name });
    return newColor.get({ raw: true });
  } catch (error) {
    throw error;
  }
};

adminsProducts.addNewProducteService = async ({ name, category, price, img_link, id_color }) => {
  try {
    const newProduct = await Product.create({ name_product: name, category, price, img_link, id_color });
    return newProduct.get({ raw: true });
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

adminsProducts.addNewProductsStoreService = async ({ stock, id_store, id_product }) => {
  try {
    const newProductsStore = await ProductStore.create({ stock, id_store, id_product });
    return newProductsStore.get({ raw: true });
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

adminsProducts.deleteProductService = async ({ id_product }) => {
  try {
    const deletedProduct = await Product.destroy({ where: { id_product } });
    if (deletedProduct === 0) throw `El producto con el ID ${id_product} que está intentando borrar, no existe`;
    return `El producto de id '${id_product}' fue borrado con éxito`;
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

adminsProducts.deleteProductsStoreService = async ({ id_products_store }) => {
  try {
    const deletedColor = await ProductStore.destroy({ where: { id_products_store } });
    if (deletedColor === 0)
      throw `El producto de la tienda con el ID ${id_products_store} que está intentando borrar, no existe`;
    return `El producto de la tienda con el id '${id_products_store}' fue borrado con éxito`;
  } catch (error) {
    throw error;
  }
};

module.exports = adminsProducts;
