<template>
  <ul
    class="min-w-[8rem] py-1 bg-white border rounded shadow-lg"
    :class="classes"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
defineProps({
  classes: {
    type: String,
    default: "",
  },
});
</script>
