const storeModel = (sequelize, DataTypes) => {
  const Store = sequelize.define("store", {
    id_store: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name_store: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    address_store: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  });

  Store.associate = (models) => {
    Store.hasMany(models.User, { foreignKey: "id_store" });
    Store.belongsToMany(models.Product, { through: models.ProductStore });
  };

  return Store;
};

module.exports = storeModel;
