const productsStoresModel = (sequelize, DataTypes) => {
  const ProductsStore = sequelize.define("products_store", {
    id_products_store: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    stocks: {
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
    //    id_color: {
    //      type: DataTypes.BIGINT,
    //      allowNull: false,
    //    },
  });

  //  ProductsStore.associate = (models) => {
  //    ProductsStore.belongsTo(models.Store, { as: "store", foreignKey: "id_store" });
  //    ProductsStore.belongsTo(models.Product, { as: "product", foreignKey: "id_product" });
  //    ProductsStore.belongsTo(models.Color, { as: "color", foreignKey: "id_color" });
  //  };

  return ProductsStore;
};

module.exports = productsStoresModel;
