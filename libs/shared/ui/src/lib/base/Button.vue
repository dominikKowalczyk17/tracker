<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center rounded px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      classes,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "button",
  },
  classes: {
    type: String,
    default: "",
  },
});
</script>
