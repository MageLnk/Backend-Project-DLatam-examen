const { Sequelize, DataTypes } = require("sequelize");
const {
  config: { database },
} = require("../config/config");
// Bring Models
const User = require("./user.model");
const Store = require("./store.model");
const ProductStore = require("./products_stores.model");
const Product = require("./products.model");
const Color = require("./color.model");
const ColorTones = require("./color_tones.model");
// Set DB
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(database.dbName, database.user, database.password, {
  host: database.host,
  port: database.port,
  dialect: database.dialect,
});

// Models
const models = {
  User: User(sequelize, DataTypes),
  Store: Store(sequelize, DataTypes),
  Product: Product(sequelize, DataTypes),
  ProductStore: ProductStore(sequelize, DataTypes),
  Color: Color(sequelize, DataTypes),
  ColorTones: ColorTones(sequelize, DataTypes),
};

// Define Relationships
models.Store.hasMany(models.User, { foreignKey: "id_users", sourceKey: "id_users" });
models.User.belongsTo(models.Store, { foreignKey: "id_store", targetId: "id_store" });
//models.Store.hasMany(models.User, { as: "users" });
//models.Store.hasMany(models.ProductStore, { as: "products_stores" });
//models.ProductStore.belongsTo(models.Store, { as: "store" });
//models.ProductStore.belongsTo(models.Product, { as: "products" });
//models.Product.belongsToMany(models.Color, { through: models.ColorTones });
//models.Color.belongsToMany(models.Product, { through: models.ColorTones });

// export
module.exports = { sequelize, models };
