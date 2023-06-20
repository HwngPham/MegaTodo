<template>
  <div class="container">
    <div class="input">
      <Input />
    </div>

    <div class="todo-list">
      <div v-if="todoStore.allTodo.length" class="todo-item">
        <div v-for="item in todoStore.allTodo" :key="item.content + item.id">
          <TodoItem :item="item" />
        </div>
      </div>

      <el-empty v-else description="Nothing to do yet! 😢" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-width: 600px;
  justify-content: space-between;
  gap: 40px;
}

.input {
  width: 50%;
  margin-top: 10px;
}

.todo-list {
  display: flex;
  flex-grow: 1;
}

.todo-item {
  width: 100%;
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import { todoStore } from "#/store";
import { allTodoQuery } from "#/services/graph";
import Input from "./components/input.vue";
import TodoItem from "./components/item.vue";

const query = allTodoQuery();

onMounted(async () => {
  const res = await query.executeQuery();
  todoStore.setAllTodo(res.data.value.allTodo);
});
</script>
