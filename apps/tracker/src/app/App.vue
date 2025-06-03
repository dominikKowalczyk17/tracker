<script setup lang="ts"></script>

<template>
  <header
    className="hidden md:block border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center"
        >
          <span className="text-white font-bold text-sm">P&W</span>
        </div>
        <span className="font-semibold">Performance & Wealth</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  </header>
</template>
