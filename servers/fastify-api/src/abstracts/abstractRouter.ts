import { FastifyInstance, RouteShorthandOptions } from "fastify";

export interface IRouter {
  bootstrap(): void;
}

export abstract class Router implements IRouter {
  protected app: FastifyInstance;
  protected configs: RouteShorthandOptions;

  constructor(app: FastifyInstance, configs?: RouteShorthandOptions) {
    this.app = app;
    this.configs = configs ?? {};
  }

  abstract bootstrap(): void;
}
