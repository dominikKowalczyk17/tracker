<template>
  <li>
    <button
      :class="['w-full text-left px-3 py-1.5 hover:bg-gray-100 focus:bg-gray-100 transition-colors', { 'opacity-50 pointer-events-none': disabled }, classes]"
      :disabled="disabled"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </li>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  classes: {
    type: String,
    default: ''
  }
});
</script>