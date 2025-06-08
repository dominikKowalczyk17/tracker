// Toggle button for collapsing/expanding sidebar
<template>
  <button class="sidebar-trigger" @click="toggleSidebar">
    <span v-if="isOpen">Collapse</span>
    <span v-else>Expand</span>
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(true);
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
  // Emit an event or handle the sidebar state change as needed
  console.log(`Sidebar is now ${isOpen.value ? 'open' : 'closed'}`);
};
</script>
