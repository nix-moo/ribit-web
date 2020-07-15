const Sequelize = require('sequelize');

const Project = Sequelize.define('project', {
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

Project.beforeUpdate(); //Calculate the new progress percentage

module.export = Project;
