const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' });

const {
  DB_USERNAME,
  DB_NAME, DB_HOST,
  DB_PASSWORD,
  DB_DIALECT
} = process.env;

module.exports = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
    
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})