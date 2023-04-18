import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";

export const createServer = (configs: RouteShorthandOptions = {}) => {
  const app: FastifyInstance = Fastify({});

  app.get("/ping", configs, async (req, res) => {
    return { message: "pong" };
  });

  return app;
};
