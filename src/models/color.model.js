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
    //Color.hasMany(models.ProductStore);
    Color.hasMany(models.Product, { foreignKey: "id_product" });
    Color.hasMany(models.ColorTones, { foreignKey: "id_color_tone" });
  };

  return Color;
};

module.exports = colorModel;
