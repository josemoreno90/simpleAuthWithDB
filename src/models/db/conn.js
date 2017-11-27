const pgp = require('pg-promise')();
const config = {
  database: 'simple_auth_development',
  host: 'localhost',
  port: 5432
};

const db = pgp(config);

module.exports = db;
