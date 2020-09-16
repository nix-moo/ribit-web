const User = require('./user')
const Pattern = require('./pattern')
const Section = require('./section')
const Row = require('./row')
const Project = require('./project')

User.hasMany(Pattern)
User.hasMany(Project)

Pattern.belongsTo(User)
Pattern.hasMany(Project)
Pattern.hasMany(Section)

Section.belongsTo(Pattern)
Section.hasMany(Row)

Row.belongsTo(Section)

Project.belongsTo(User)
Project.belongsTo(Pattern)

module.exports = {
  User,
  Pattern,
  Section,
  Row,
  Project,
}
