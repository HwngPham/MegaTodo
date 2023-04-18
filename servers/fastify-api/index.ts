import { createServer } from "./main";

const server = createServer();
const port = Number(process.env.PORT) || 3000;

server.listen({ port }, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
