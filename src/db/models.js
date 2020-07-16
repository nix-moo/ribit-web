const User = require('./user');
const Row = require('./row');
const Pattern = require('./pattern');
const Project = require('./project');

User.hasMany(Pattern);
User.hasMany(Project);

Pattern.belongsTo(User);
Pattern.hasMany(Project);
Pattern.hasMany(Row);

Project.belongsTo(User);
Project.hasOne(Pattern);

Row.belongsTo(Pattern);

module.exports = {
  User,
  Pattern,
  Project,
  Row,
};
