const productModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("products", {
    id_products: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name_product: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    img_link: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  });

  // Define la relación de muchos a uno entre Product y ProductStore
  Product.belongsTo(sequelize.models.ProductsStores, { as: "products_stores" });

  // Define la relación de uno a muchos entre Product y Color
  Product.hasMany(sequelize.models.Color, { as: "colors" });

  return Product;
};

module.exports = productModel;
