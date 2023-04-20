import { FastifyInstance } from "fastify";
import { DataTypes, Sequelize } from "sequelize";

export const dbClient = new Sequelize("sqlite::memory:");

export const Todo = dbClient.define("Todos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: DataTypes.STRING,
  isDone: DataTypes.BOOLEAN,
});

export const database = async (app: FastifyInstance) => {
  dbClient.sync();
};
