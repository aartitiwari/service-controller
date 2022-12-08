require('dotenv').config();
const config = {};

config.PORT = process.env.PORT;
config.DB_HOST = process.env.DB_HOST;

module.exports = config;