<template>
    <li class="sidebar-menu-item">
        <router-link :to="item.route" class="sidebar-menu-link">
            <span class="sidebar-menu-icon">{{ item.icon }}</span>
            <span class="sidebar-menu-text">{{ item.label }}</span>
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'SidebarMenuItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>
