const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize("sqlite:db.sqlite3", {
  logging: console.log,
});

db.define("Todo", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
});

module.exports = { db };
