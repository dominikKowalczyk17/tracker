<template>
  <div
    class="my-1 border-t border-gray-200"
    :class="classes"
  />
</template>

<script setup lang="ts">
defineProps({
  classes: {
    type: String,
    default: ''
  }
});
</script>