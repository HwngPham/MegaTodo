const yup = require("yup");

const todoSchema = yup.object({
  content: yup.string().required(),
  isDone: yup.bool(),
});

module.exports = { todoSchema };
