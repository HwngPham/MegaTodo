import { Client, cacheExchange, fetchExchange } from "@urql/vue";

export const client = new Client({
  url: process.env.GRAPHQL_URL ?? "http://127.0.0.1:4000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});
