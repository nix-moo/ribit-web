const User = require('./user');
const Pattern = require('./pattern');
const Project = require('./project');
const Row = require('./row');

User.hasMany(Pattern);
User.hasMany(Project);

Pattern.belongsTo(User);
Pattern.hasMany(Project);
Pattern.hasMany(Row);

Row.belongsTo(Pattern);

Project.belongsTo(User);
Project.belongsTo(Pattern);

module.exports = {
  User,
  Pattern,
  Project,
  Row,
};
