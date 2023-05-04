"use strict";
const Sequelize = require("sequelize");
const process = require("process");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
const Users = require("./users");
const Categorys = require("./categorys");
const Productions = require("./productions");
const Sims = require("./sims");
const Reviews = require("./reviews");

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.Users = Users(sequelize, Sequelize);
db.Categorys = Categorys(sequelize, Sequelize);
db.Productions = Productions(sequelize, Sequelize);
db.Sims = Sims(sequelize, Sequelize);
db.Reviews = Reviews(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
