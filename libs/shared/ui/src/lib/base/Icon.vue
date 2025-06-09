<template>
  <span
    class="icon inline-flex items-center justify-center w-4 h-4"
    :class="classes"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps({
  classes: {
    type: String,
    default: ''
  }
});
</script>