<template>
  <form @submit.prevent="onSubmit">
    <el-input
      v-model="input"
      placeholder="Let's do something..."
      clearable
      size="large"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { todoStore } from "#/store";
import { createTodoMutation } from "#/services/graph";

const input = ref("");
const query = createTodoMutation();

const onSubmit = async () => {
  if (!input.value) return;

  const res = await query.executeMutation({
    content: input.value,
  });

  if (res.data) {
    input.value = "";
    console.log("created todo", res.data.createTodo);
    todoStore.addTodo(res.data.createTodo ?? "");
  } else {
    console.error(res.error);
  }
};
</script>
