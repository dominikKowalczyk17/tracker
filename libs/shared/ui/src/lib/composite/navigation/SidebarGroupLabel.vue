// Section headers
<template>
    <div class="sidebar-group-label">
        <h3 class="sidebar-group-label-title">{{ title }}</h3>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>