const { Sequelize, DataTypes } = require("sequelize");
const {
  config: { database },
} = require("../config/config");
// Bring Models
const User = require("./user.model.js");
const Store = require("./store.model");
const ProductStore = require("./products_store.model.js");
const Product = require("./product.model.js");
const Color = require("./color.model.js");
const ColorTone = require("./color_tone.model.js");
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
  ColorTones: ColorTone(sequelize, DataTypes),
};

// Define Relationships
Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

// export
module.exports = { sequelize, models };
