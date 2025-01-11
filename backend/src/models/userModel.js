const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, unique: true },
  bio: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  public_repos: { type: DataTypes.INTEGER },
  public_gists: { type: DataTypes.INTEGER },
  followers: { type: DataTypes.INTEGER },
  following: { type: DataTypes.INTEGER },
  avatar_url: { type: DataTypes.STRING },
  soft_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = User;
