const { Router } = require("express");
const { todoSchema } = require("../libs/validations");
const { badRequest, notFound } = require("../libs/responses");

const router = Router();
const getModel = (req) => req.app.get("db").models.Todo;

router.get("/", (req, res) => {
  getModel(req)
    .findAndCountAll()
    .then(({ rows, count }) => {
      res.json({
        items: rows,
        count: count,
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  getModel(req)
    .findByPk(id)
    .then((item) => {
      if (!item) return notFound(req, { id });

      res.json({ item });
    });
});

router.post("/", (req, res) => {
  const { body: payload } = req;

  todoSchema
    .validate(payload)
    .then((validatedData) => {
      getModel(req)
        .create(validatedData)
        .then((item) => {
          res.json({ item });
        });
    })
    .catch((err) => {
      badRequest(res, err.message);
    });
});

router.patch("/:id", (req, res) => {
  const {
    body: payload,
    params: { id },
  } = req;

  todoSchema
    .validate(payload)
    .then((validatedData) => {
      getModel(req)
        .findByPk(id)
        .then((item) => {
          if (!item) return notFound(res, { id });

          item.update(validatedData).then((item) => {
            res.json({ item });
          });
        });
    })
    .catch((err) => {
      badRequest(res, err.message);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  getModel(req)
    .findByPk(id)
    .then((item) => {
      if (!item) return notFound(res, { id });

      item.destroy({ force: true }).then(() => {
        res.json({
          item: { id },
        });
      });
    });
});

module.exports = { router };
