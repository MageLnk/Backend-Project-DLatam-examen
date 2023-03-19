const colorTonesModel = (sequelize, DataTypes) => {
  const ColorTone = sequelize.define("color_tone", {
    id_color_tone: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name_color_tone: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    id_color: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });

  ColorTone.associate = (models) => {
    ColorTone.belongsTo(models.Color, { foreignKey: "id_color" });
  };
  return ColorTone;
};

module.exports = colorTonesModel;
