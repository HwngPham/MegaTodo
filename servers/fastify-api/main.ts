import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import helmet from "@fastify/helmet";
import { TodoRouter } from "./src/routes/todos";
import { HealthRouter } from "./src/routes/health";

export const createServer = (configs: RouteShorthandOptions = {}) => {
  const app: FastifyInstance = Fastify({});
  app.register(helmet);

  [new TodoRouter(app), new HealthRouter(app)].forEach((router) =>
    router.bootstrap()
  );
  return app;
};
