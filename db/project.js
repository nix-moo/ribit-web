const Sequelize = require('sequelize');

const Project = Sequelize.define('project', {
  size: {
    type: Sequelize.STRING,
  },
  completed: {
    type: Sequelize.INTEGER,
  },
  rowCount: {
    type: Sequelize.INTEGER,
  },
});

Project.beforeUpdate(); //Calculate the new progress percentage

module.export = Project;
