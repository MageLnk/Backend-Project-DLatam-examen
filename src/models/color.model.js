const colorModel = (sequelize, DataTypes) => {
  const Color = sequelize.define("color", {
    id_color: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name_color: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });

  Color.associate = (models) => {
    Color.hasMany(models.ProductStore);
    Color.hasMany(models.Product);
    Color.hasMany(models.ColorTones);
  };

  return Color;
};

module.exports = colorModel;
