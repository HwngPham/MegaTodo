import { gql, useMutation } from "@urql/vue";

export const createTodoMutation = () =>
  useMutation(gql`
    mutation ($content: String!) {
      createTodo(content: $content) {
        id
        content
        isDone
      }
    }
  `);
