import { gql, useMutation } from "@urql/vue";

export const deleteTodoMutation = () =>
  useMutation(gql`
    mutation ($id: Int!) {
      deleteTodo(id: $id) {
        id
        content
        isDone
      }
    }
  `);
