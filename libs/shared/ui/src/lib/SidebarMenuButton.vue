<template>
  <button
    class="sidebar-menu-button"
    @click="navigate"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function navigate() {
  router.push({ name: 'target-route' });
}
</script>
