const storeModel = (sequelize, DataTypes) => {
  const Store = sequelize.define("store", {
    id_store: {
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

  Store.associate = (models) => {
    Store.hasMany(models.User);
    Store.hasMany(models.ProductStore);
  };

  return Store;
};

module.exports = storeModel;
