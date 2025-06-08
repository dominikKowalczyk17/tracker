<template>
    <nav class="sidebar-menu">
        <ul>
            <SidebarMenuItem v-for="item in menuItems" :key="item.id" :item="item" />
        </ul>
    </nav>
</template>

<script>
</script>
