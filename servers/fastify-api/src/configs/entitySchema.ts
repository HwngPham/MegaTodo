import Ajv from "ajv";

export const validator = new Ajv();

export const schemas = {
  todo: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
      isDone: {
        type: "boolean",
        default: false,
      },
    },
    required: ["content"],
    additionalProperties: false,
  },
};
