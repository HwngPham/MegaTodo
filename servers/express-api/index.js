const env = require("dotenv");
const { createApp } = require("./src/app");

env.config();
const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ?? 8000;

createApp().listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
