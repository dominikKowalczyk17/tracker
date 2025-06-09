<template>
  <Dropdown />
  <Suspense>
    <template #default>
      <div>
        <SportsApp />
        <InvestmentsApp />
      </div>
    </template>
    <template #fallback>
      <div>Loading remote apps...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { AppSidebar, Dropdown } from '@tracker/shared/ui';

const SportsApp = defineAsyncComponent(() => import('sportsApp/RemoteSportsApp'));
const InvestmentsApp = defineAsyncComponent(() => import('investmentsApp/RemoteInvestmentsApp'));

const activeTab = ref('overview');
</script>
