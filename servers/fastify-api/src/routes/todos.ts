import { FastifyInstance } from "fastify";

export const apiTodos = async (app: FastifyInstance) => {
  app.get("/todos", function () {
    // app.log.info("===reach", this.mongo.db?.collections());
    return {
      message: "get all todos",
    };
  });
};
