import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import helmet from "@fastify/helmet";
import { apiTodos } from "./src/routes/todos";
import { apiHealth } from "./src/routes/health";
import { database } from "./src/configs/database";

export const createServer = (configs: RouteShorthandOptions = {}) => {
  const app: FastifyInstance = Fastify({});
  const decorators = [database, helmet, apiHealth, apiTodos];

  decorators.forEach((d) => app.register(d));
  return app;
};
