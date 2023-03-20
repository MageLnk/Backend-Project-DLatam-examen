// DB's
const {
  models: { Color, ColorTones, Product, ProductStore },
} = require("../models");
//

const products = {};

products.bringAllProductsService = async () => {
  try {
    const products = await ProductStore.findAll({
      include: {
        model: Product,
        attributes: ["name_product", "size", "category", "price", "description", "img_link", "id_product"],
        include: {
          model: Color,
          attributes: ["name_color"],
          include: {
            model: ColorTones,
            attributes: ["name_color_tone"],
          },
        },
      },
      attributes: ["stock"],
    });

    return products;
  } catch (error) {
    throw error;
  }
};

module.exports = products;
