import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // TODO: read uri from .env
  schema: "http://localhost:8000",
  documents: ["src/**/*.vue"],
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
