const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../db");
const User = require('./User');

const Link = sequelize.define("link", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
    model: User,
    key: 'id'
    },
  },
  term: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  text: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    lowercase: true,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

module.exports = Link;
