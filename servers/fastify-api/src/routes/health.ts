import { Router } from "../abstracts/abstractRouter";

export class HealthRouter extends Router {
  bootstrap() {
    this.app.get("/ping", () => {
      return { message: "pong" };
    });
  }
}
