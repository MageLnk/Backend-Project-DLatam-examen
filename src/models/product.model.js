const productModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    id_product: {
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
    id_color: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });

  Product.associate = (models) => {
    Product.hasMany(models.ProductStore, { foreignKey: "id_products_store" });
    //    Product.belongsTo(models.Color, { as: "color", foreignKey: "id_color" });
  };

  return Product;
};

module.exports = productModel;
