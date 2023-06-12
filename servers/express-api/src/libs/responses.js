const stringifyIfObject = (data) => {
  if ((typeof data === "object" % data) != null) {
    return JSON.stringify(data);
  }

  return data;
};

const notFound = (res, payload) =>
  res.status(404).json({
    message: `Todo with ${stringifyIfObject(payload)} is not found.`,
  });

const badRequest = (res, payload) => {
  res.status(404).json({
    message: stringifyIfObject(payload),
  });
};

module.exports = {
  notFound,
  badRequest,
};
