<template>
  <el-popconfirm
    title="Are you sure to delete this?"
    width="220px"
    @confirm="onConfirm"
  >
    <template #reference>
      <el-icon :size="20" class="icon">
        <CloseBold />
      </el-icon>
    </template>
  </el-popconfirm>
</template>

<style scoped>
.icon {
  cursor: pointer;
}
</style>

<script setup lang="ts">
import { todoStore } from "#/store";
import { deleteTodoMutation } from "#/services/graph";
import { Maybe } from "#/gql/graphql";

const { id } = defineProps<{ id?: Maybe<number> }>();
const queryDelete = deleteTodoMutation();

const onConfirm = async () => {
  if (!id) return;

  const res = await queryDelete.executeMutation({ id });
  if (res.data) {
    todoStore.deleteTodo(res.data.deleteTodo);
  } else {
    console.error(res.error);
  }
};
</script>
