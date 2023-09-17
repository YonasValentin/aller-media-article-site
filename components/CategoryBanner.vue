<template>
  <header class="bg-red-600 p-1">
    <h1 class="uppercase font-bold text-4xl text-white">{{ categoryName }}</h1>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  categoryName: string;
}>();
</script>
