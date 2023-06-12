const { createApp } = require("./src/app");

createApp().listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
