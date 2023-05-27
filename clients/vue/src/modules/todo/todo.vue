<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="store.increase()">count is {{ store.count }}</button>
    </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
import {store} from '@/store'

defineProps<{ msg: string }>()

</script>

