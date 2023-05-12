<script setup lang="ts">
const emits = defineEmits<{
  click: [payload: string];
}>();

function handleClick() {
  emits('click', 'Something went right!');
}
</script>
<template>
  <button @click="handleClick"><slot /></button>
</template>
