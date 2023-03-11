const productsStoresModel = (sequelize, DataTypes) => {
  const ProductsStores = sequelize.define("products_stores", {
    id_products_stores: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    stocks: {
      type: DataTypes.BIGINT,
    },
  });

  // Define la relación de muchos a uno entre ProductStore y Store
  //ProductsStores.belongsTo(sequelize.models.Store, { as: "store" });

  // Define la relación de uno a muchos entre ProductStore y Product
  //ProductsStores.hasMany(sequelize.models.Product, { as: "products" });

  return ProductsStores;
};

module.exports = productsStoresModel;
