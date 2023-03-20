const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id_user: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(200),
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
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    id_store: {
      type: DataTypes.BIGINT,
      allowNull: true,
      // Lo dejé true para que no sea obligatorio meter al usuario en una tienda, por ahora
    },
  });

  User.associate = (models) => {
    User.belongsTo(models.Store, { foreignKey: "id_store" });
  };

  return User;
};

module.exports = userModel;
