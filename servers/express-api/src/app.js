const express = require("express");
const { router: healthRouter } = require("./routes/health");
const { router: todoRouter } = require("./routes/todos");
const { db } = require("./libs/db");

const createApp = () => {
  const app = express();

  app.use(express.json());

  db.sync().then(() => {
    app.set("db", db);
    app.use("/health", healthRouter);
    app.use("/todos", todoRouter);
  });

  return app;
};

module.exports = { createApp };
