<template>
  <div
    ref="trigger"
    class="relative"
  >
    <slot name="trigger" />
    <div
      v-if="open"
      class="absolute z-50 mt-2"
      :class="popoverClasses"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps({
  open: Boolean,
  popoverClasses: {
    type: String,
    default: "bg-white border rounded shadow-lg",
  },
});
const trigger = ref(null);
</script>
