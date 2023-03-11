const colorTonesModel = (sequelize, DataTypes) => {
  const ColorTones = sequelize.define("color_tones", {
    id_colors: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name_color_tones: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });

  // Define la relación de muchos a uno entre ColorTone y Color
  //ColorTone.belongsTo(sequelize.models.Color, { as: "colors" });

  return ColorTones;
};

module.exports = colorTonesModel;
