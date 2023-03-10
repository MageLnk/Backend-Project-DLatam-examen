const storeModel = (sequelize, DataTypes) => {
  const Store = sequelize.define("store", {
    id_users: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name_store: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    address_store: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  });

  // Define la relación de uno a muchos entre Store y User
  Store.hasMany(sequelize.models.User, { as: "users" });

  // Define la relación de uno a muchos entre Store y ProductStore
  Store.hasMany(sequelize.models.ProductsStores, { as: "product_stores" });

  return Store;
};

module.exports = storeModel;
