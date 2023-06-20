import { gql, useQuery } from "@urql/vue";

export const allTodoQuery = () =>
  useQuery({
    query: gql`
      query {
        allTodo {
          id
          content
          isDone
        }
      }
    `,
  });
