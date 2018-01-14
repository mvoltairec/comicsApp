const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  dialect: env.DATABASE_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// connecting everything to the db object so its all accessible
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.comics = require('../models/comics.js')(sequelize, Sequelize);
db.publishers = require('../models/publishers.js')(sequelize, Sequelize);

// Relations
db.comics.belongsTo(db.publishers);

module.exports = db;

