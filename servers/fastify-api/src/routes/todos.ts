import { FastifyInstance } from "fastify";
import { Todo } from "../configs/database";
import { schemas, validator } from "../configs/entitySchema";

export const apiTodos = async (app: FastifyInstance) => {
  app.get("/todos", async () => {
    return {
      message: await Todo.findAll(),
    };
  });

  app.post("/todos", async (req, res) => {
    if (!validator.validate(schemas.todo, req.body)) {
      res.status(400).send({ message: validator.errors });
    }

    const { content, isDone } = req.body as Record<string, any>;

    return {
      message: await Todo.create({ content, isDone }),
    };
  });

  app.put("/todos/:id", async (req, res) => {
    const { id } = req.params as Record<string, any>;
    const todo = await Todo.findByPk(id);
    if (!todo)
      return res
        .status(404)
        .send({ messsage: `Todo with id= ${id} does not exist` });
    if (!validator.validate(schemas.todo, req.body)) {
      res.status(400).send({ message: validator.errors });
    }
    await todo.update(req.body as Record<string, any>);
    return { message: todo };
  });

  app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params as Record<string, any>;
    const todo = await Todo.findByPk(id);

    if (!todo)
      return res
        .status(404)
        .send({ messsage: `Todo with id= ${id} does not exist` });
    await todo.destroy();

    return { message: todo };
  });
};
