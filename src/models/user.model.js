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
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    // RolID
    //    id_store: {
    //      type: DataTypes.BIGINT,
    //      allowNull: false,
    //    },
  });

  //  User.associate = (models) => {
  //    User.belongsTo(models.Store, { as: "store", foreignKey: "id_store" });
  //  };

  return User;
};

module.exports = userModel;
