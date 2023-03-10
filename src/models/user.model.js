const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
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
  });

  // Define la relación de muchos a uno
  User.belongsTo(sequelize.models.Store, { as: "store" });

  return User;
};

module.exports = userModel;
