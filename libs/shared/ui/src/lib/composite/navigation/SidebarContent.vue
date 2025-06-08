// Main scrollable content area
<template>
  <div class="sidebar-content">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  // Define any props if needed, currently empty
});
</script>
