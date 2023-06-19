<template>
  <el-input v-model="input" placeholder="Let's do something..." />
</template>

<script setup lang="ts">
import { ref } from "vue";
const input = ref("");
</script>
