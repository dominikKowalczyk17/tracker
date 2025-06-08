// Bottom section with user info
<template>
  <div class="sidebar-footer">
    <div class="user-info">
      <img :src="user.avatar" alt="User Avatar" class="avatar" />
      <span class="username">{{ user.name }}</span>
    </div>
    <button @click="logout" class="logout-button">Logout</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
 const user = ref({
  name: 'John Doe',
  avatar: 'https://via.placeholder.com/40'
});
const logout = () => {
  window.alert('User logged out');
};
</script>

