<script lang="ts" setup>
const snackbar = useSnackbar();
</script>
<template>
  <div class="h-[100dvh] flex flex-col justify-center items-center">
    <h1>Hello there</h1>
    <div class="flex gap-4">
      <m-button
        class="bg-blue-200 p-4 px-6 shadow hover:shadow-lg hover:bg-blue-300 active:scale-95 transition rounded border-none"
        @click="useShowSnack('Something went right!', snackbar)">New Success</m-button>
      <m-button
        class="bg-blue-200 p-4 px-6 shadow hover:shadow-lg hover:bg-blue-300 active:scale-95 transition rounded border-none"
        @click="showAlert('Something went wrong!', snackbar)">New Error</m-button>
    </div>
</div></template>
