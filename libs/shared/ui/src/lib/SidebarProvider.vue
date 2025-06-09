// Context provider for sidebar state management
<template>
  <div class="sidebar-provider">
    <SidebarTrigger />
    <SidebarMenu />
    <SidebarGroup v-for="group in groups" :key="group.title" :title="group.title">
      <SidebarGroupContent>
        <slot :group="group" />
      </SidebarGroupContent>
    </SidebarGroup>
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from 'vue';
import SidebarTrigger from './SidebarTrigger.vue';
import SidebarMenu from './SidebarMenu.vue';
import SidebarGroup from './SidebarGroup.vue';
import SidebarGroupContent from './SidebarGroupContent.vue';
const isOpen = ref(true);

const groups = ref([
  { title: 'Group 1' },
  { title: 'Group 2' },
  { title: 'Group 3' }
]);
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
  // Replace with a production-appropriate logging solution if needed
  // Example: use a logging library or remove the statement entirely
  // logger.info(`Sidebar is now ${isOpen.value ? 'open' : 'closed'}`);
};
provide('isOpen', isOpen);
provide('toggleSidebar', toggleSidebar);
provide('groups', groups);
provide('SidebarGroupContent', SidebarGroupContent);
provide('SidebarGroup', SidebarGroup);
provide('SidebarTrigger', SidebarTrigger);
provide('SidebarMenu', SidebarMenu);
</script>
