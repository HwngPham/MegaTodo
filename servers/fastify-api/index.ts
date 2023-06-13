import { config } from "dotenv";
import { createServer } from "./main";

config();
const server = createServer();
const port = Number(process.env.PORT) ?? 3000;
const host = process.env.HOST ?? "localhost";

server.listen({ port, host }, () => {
  console.log(`Server is running on http://${host}:${port}`);
  console.log(server.printRoutes());
});
