<template>
  <div class="sidebar-group">
    <h3 class="sidebar-group-title">{{ title }}</h3>
    <SidebarGroupContent>
      <slot />
    </SidebarGroupContent>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import SidebarGroupContent from './SidebarGroupContent.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>
