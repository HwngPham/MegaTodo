<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import Input from "./components/input.vue";
// import { store } from "#/store";
import TodoItem from "./components/item.vue";
import { gql, useQuery } from "@urql/vue";

let allTodo: Ref<any> = ref([]);

const fetchAllTodo = useQuery({
  query: gql`
    query {
      allTodo {
        content
        isDone
      }
    }
  `,
  pause: false,
  requestPolicy: "network-only",
});

allTodo = fetchAllTodo.data;
watch(allTodo, console.log);
</script>

<template>
  <Input />
  <li v-for="item in allTodo">
    <TodoItem :item="item" />
  </li>
</template>

<style scoped></style>
