<template>
  <div
    class="px-3 py-1.5 text-xs text-gray-500 uppercase tracking-wider"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  classes: {
    type: String,
    default: ''
  }
});
</script>