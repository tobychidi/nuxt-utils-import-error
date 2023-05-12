<script setup lang="ts">
function handleClick(payload) {
  console.log(payload);
}
</script>
<template>
  <h1>Hello there</h1>
  <m-button @click="handleClick">New Snack</m-button>
</template>
