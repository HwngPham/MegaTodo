const { Router } = require("express");

const router = Router();

router.get("/", (_req, res) => {
  res.json({ health: "ok" });
});

module.exports = { router };
