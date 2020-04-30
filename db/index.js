const Sequelize = require('sequelize');
const Row = require('./row');
const Pattern = require('./pattern');
const Project = require('./project');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/ribit',
  {
    logging: false,
  }
);

Pattern.hasMany(Project);
Pattern.hasMany(Row);

Project.hasOne(Pattern);

Row.belongsTo(Pattern);

module.exports = db;
