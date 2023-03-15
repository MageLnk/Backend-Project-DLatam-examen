const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id_users: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    address_user: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    // RolID
    id_store: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });

  // Modelo 1
  // Define la relación de muchos a uno
  //User.belongsTo(sequelize.models.Store, { foreignKey: { name: "id_store", allowNull: false }, targetId: "id_users" });

  // Modelo 3, el del profe
  User.associate = (models) => {
    User.belongsTo(models.Store, { as: "store", foreignKey: "id_store" });
  };

  return User;
};

module.exports = userModel;
