// Top section with app logo and branding
<template>
  <div class="sidebar-header">
    <img :src="logo" alt="App Logo" class="logo" />
    <h1 class="app-name">{{ appName }}</h1>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  logo: {
    type: String,
    required: true
  },
  appName: {
    type: String,
    required: true
  }
});
</script>
