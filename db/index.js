const Sequelize = require('sequelize');

const User = require('./user');
const Row = require('./row');
const Pattern = require('./pattern');
const Project = require('./project');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/ribit',
  {
    logging: false,
  }
);

User.hasMany(Pattern);
User.hasMany(Project);

Pattern.belongsTo(User);
Pattern.hasMany(Project);
Pattern.hasMany(Row);

Project.belongsTo(User);
Project.hasOne(Pattern);

Row.belongsTo(Pattern);

module.exports = db;
