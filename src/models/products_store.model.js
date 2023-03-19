const productsStoresModel = (sequelize, DataTypes) => {
  const ProductsStore = sequelize.define("products_store", {
    id_products_store: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    stock: {
      type: DataTypes.BIGINT,
    },
    id_store: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_product: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });

  ProductsStore.associate = (models) => {
    ProductsStore.belongsTo(models.Store, { foreignKey: "id_store" });
    ProductsStore.belongsTo(models.Product, { foreignKey: "id_product" });
  };

  return ProductsStore;
};

module.exports = productsStoresModel;
