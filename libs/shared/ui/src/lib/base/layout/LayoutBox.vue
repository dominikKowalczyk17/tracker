<template>
    <div class="flex min-h-screen w-full bg-background">
        <slot name="sidebar" />
        <div class="flex-1 flex flex-col">
            <slot name="header" />
            <main class="flex-1">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts"></script>