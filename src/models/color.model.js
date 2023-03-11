const colorModel = (sequelize, DataTypes) => {
  const Color = sequelize.define("colors", {
    id_colors: {
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

  // Define la relación de muchos a uno entre Color y Products
  //Color.belongsTo(sequelize.models.Product, { as: "products" });

  // Define la relación de uno a muchos entre Color y ColorTone
  //Color.hasMany(sequelize.models.ColorTone, { as: "color_tones" });

  return Color;
};

module.exports = colorModel;
