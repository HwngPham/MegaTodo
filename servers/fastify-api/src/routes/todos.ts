import { Router } from "../abstracts/abstractRouter";

export class TodoRouter extends Router {
  bootstrap() {
    this.app.get("/todos", (req, res) => {
      return {
        result: [],
      };
    });
  }
}
