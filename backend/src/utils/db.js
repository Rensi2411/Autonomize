const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: 'sqlite',
  storage: './github_users.sqlite',
});

module.exports = sequelize;
