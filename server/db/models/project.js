const Sequelize = require('sequelize');
const db = require('../db');

const Project = db.define('project', {
  size: {
    type: Sequelize.STRING,
  },
  progress: {
    type: Sequelize.INTEGER,
  },
  rowCount: {
    type: Sequelize.INTEGER,
  },
  started: {
    type: Sequelize.DATEONLY,
    defaultValue: Date.now(),
  },
  finished: {
    type: Sequelize.DATEONLY,
  },
});

//Calculate the new progress percentage
// Project.beforeUpdate();

module.exports = Project;
