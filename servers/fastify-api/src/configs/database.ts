import { FastifyInstance } from "fastify";
import db from "@fastify/mongodb";
import { MongoClient } from "mongodb";

export const database = async (app: FastifyInstance) => {
  app.log.info("===init database..");
  try {
    const client = new MongoClient("mongodb://localhost:27017/test");
    await client.connect();
    const db = client.db("test");
    app.log.info("===collections", db.collections());
  } catch (e) {
    app.log.error("==connect failed", e);
  }
};
