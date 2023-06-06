<script setup lang="ts">
interface Props {
  item: {
    id: number
    value: string
  }
}
withDefaults(defineProps<Props>(), {
  item: () => ({ id: 1, value: 'blank'})
})
</script>

<template>
  <li>{{ item.value }}</li>
</template>
