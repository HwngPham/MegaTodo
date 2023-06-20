<template>
  <div class="item-container">
    <div class="item-content">
      <el-checkbox v-model="checked" size="large" @change="onCheckboxChange" />

      <span class="item-content-text" :class="{ checked }">{{
        item.content
      }}</span>
    </div>

    <div class="item-icons">
      <el-icon :size="20" class="icon" @click="toggleEditModal">
        <Edit />
      </el-icon>
      <ModalConfirmDelete :id="item.id" />
    </div>
  </div>

  <ModalEditContent
    :item="item"
    :visible="modalEditVisible"
    :toggleVisible="toggleEditModal"
  />
</template>

<style scoped>
.item-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-content-text {
  padding-left: 10px;
  padding-bottom: 4px;
}

.item-icons {
  display: flex;
  gap: 10px;
}

.icon {
  cursor: pointer;
}

.checked {
  text-decoration: line-through;
  color: grey;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "#/gql/graphql";
import { updateTodoMutation } from "#/services/graph";
import ModalConfirmDelete from "./modals/confirmDelete.vue";
import ModalEditContent from "./modals/editContent.vue";

const { item } = defineProps<{ item: Todo }>();
const checked = ref(item.isDone);
const modalEditVisible = ref(false);
const queryUpdateDone = updateTodoMutation();

const toggleEditModal = () => {
  modalEditVisible.value = !modalEditVisible.value;
};

const onCheckboxChange = (isDone: boolean) => {
  queryUpdateDone.executeMutation({
    id: item.id,
    content: item.content,
    isDone,
  });
};
</script>
