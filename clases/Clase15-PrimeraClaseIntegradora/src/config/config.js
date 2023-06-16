const { config } = require("dotenv");

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
}); // Se ponen en mayuscula (NODE_ENV) variables de iniciacion

const { API_VERSION, NODE_ENV, PORT, ORIGIN, DB_CNN, DB_HOST, DB_NAME, DB_PORT, DB_USER, DB_PASSWORD, CURSO } =
  process.env;

module.exports = {
  API_VERSION,
  NODE_ENV,
  PORT,
  ORIGIN,
  DB_CNN,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  CURSO,
};
