const { Sequelize, DataTypes } = require("sequelize");
const {
  config: { database },
} = require("../config/config");
// Bring Models
const User = require("./user.model");
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
};

// export
module.exports = { sequelize, models };
