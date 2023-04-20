import { FastifyInstance } from "fastify";

export const apiHealth = async (app: FastifyInstance) => {
  app.get("/ping", () => {
    return { message: "pong" };
  });
};
