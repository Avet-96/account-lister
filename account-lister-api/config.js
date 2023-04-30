const config = require('./config.json')[process.env.NODE_ENV || 'development'];
const { version, name } = require('./package.json');

module.exports = {
  API_NAME: name,
  API_VERSION: version,
  MONGO_DB_URI: config.mongodbUri,
  PORT: config.port,
  NODE_ENV: process.env.NODE_ENV,
  ORIGIN: config.origin,
};
