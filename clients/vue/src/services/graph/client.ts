import { Client, cacheExchange, fetchExchange } from "@urql/vue";

export const client = new Client({
  url: import.meta.env.VITE_GRAPHQL_URL ?? "http://127.0.0.1:8000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});
