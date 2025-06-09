<template>
  <div class="relative inline-block">
    <Button
      :aria-expanded="open"
      :aria-haspopup="true"
      @click="toggle"
    >
      <slot name="trigger">
        Dropdown
      </slot>
    </Button>
    <Popover
      v-if="open"
      popover-classes="mt-2 min-w-[8rem]"
      @click-outside="close"
    >
      <Menu>
        <slot />
      </Menu>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Button, Popover, Menu } from '@tracker/shared/ui/base';

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
function close() {
  open.value = false;
}
</script>