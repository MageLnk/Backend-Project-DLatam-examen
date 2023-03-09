const userModel = (sequelize, DataTypes) => {
  const Store = sequelize.define("usuarios", {
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

  return Store;
};

module.exports = userModel;
