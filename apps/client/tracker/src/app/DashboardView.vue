<template>
  <div class="dashboard-view">
    <DashboardHeader />
    <LayoutBox>
      <AppSidebar :activeTab="activeTab" />
      <div class="content">
        <div class="tabs">
          <button @click="activeTab = 'overview'" :class="{ active: activeTab === 'overview' }">Overview</button>
          <button @click="activeTab = 'sports'" :class="{ active: activeTab === 'sports' }">Sports</button>
          <button @click="activeTab = 'investments'" :class="{ active: activeTab === 'investments' }">Investments</button>
        </div>
        <div class="tab-content">
          <DashboardOverview v-if="activeTab === 'overview'" />
          <RemoteSportsApp v-if="activeTab === 'sports'" />
          <RemoteInvestmentsApp v-if="activeTab === 'investments'" />
        </div>
        <DashboardSocial />
      </div>
    </LayoutBox>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { DashboardHeader, LayoutBox, AppSidebar, DashboardOverview, DashboardSocial } from '@tracker/shared/ui';

const RemoteSportsApp = defineAsyncComponent(
  () => import('sportsApp/RemoteSportsApp')
);
const RemoteInvestmentsApp = defineAsyncComponent(
  () => import('investmentsApp/RemoteInvestmentsApp')
);

const activeTab = ref('overview');
</script>
