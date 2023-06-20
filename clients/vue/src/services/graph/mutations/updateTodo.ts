import { gql, useMutation } from "@urql/vue";

export const updateTodoMutation = () =>
  useMutation(gql`
    mutation ($id: Int!, $content: String!, $isDone: Boolean) {
      updateTodo(id: $id, content: $content, isDone: $isDone) {
        id
        content
        isDone
      }
    }
  `);
