<template>
  <div
    class="py-1"
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