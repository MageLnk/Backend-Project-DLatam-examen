const { Pool } = require("pg");
//const format = require("pg-format");
//
const credentials = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATA_BASE_NAME,
  allowExitOnIdle: true,
};
const pool = new Pool(credentials);

module.exports = pool;
