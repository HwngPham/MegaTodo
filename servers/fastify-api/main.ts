import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import { apiTodos } from "./src/routes/todos";
import { apiHealth } from "./src/routes/health";
import { database } from "./src/configs/database";

export const createServer = (configs: RouteShorthandOptions = {}) => {
  const app: FastifyInstance = Fastify({});

  app.register(database);
  app.register(helmet);
  app.register(apiHealth);
  app.register(apiTodos);
  app.register(cors, {
    // TODO: turn off on prod
    origin: true,
  });

  return app;
};
