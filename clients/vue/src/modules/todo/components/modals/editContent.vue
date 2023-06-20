<template>
  <el-dialog v-model="isOpen" :beforeClose="toggleVisible" width="20%">
    <div class="input">
      <el-input
        v-model="input"
        :placeholder="item.content"
        clearable
        size="large"
      />
    </div>
    <span class="dialog-footer">
      <el-button type="primary" @click="onConfirm" :disabled="!input"
        >Save</el-button
      >
    </span>
  </el-dialog>
</template>

<style scoped>
.input {
  margin-bottom: 20px;
}
</style>

<script setup lang="ts">
import { todoStore } from "#/store";
import { updateTodoMutation } from "#/services/graph";
import { ref, watch } from "vue";
import { Todo } from "#/gql/graphql";

const props = defineProps<{
  item: Todo;
  visible: boolean;
  toggleVisible: () => void;
}>();
const { item, visible, toggleVisible } = props;
const query = updateTodoMutation();
const isOpen = ref(visible);
const input = ref(item.content);

watch(props, () => {
  isOpen.value = props.visible;
});

const onConfirm = async () => {
  const res = await query.executeMutation({
    id: item.id,
    content: input.value,
  });

  if (res.data) {
    todoStore.updateTodo(res.data.updateTodo);
  } else {
    console.error(res.error);
  }

  toggleVisible();
};
</script>
