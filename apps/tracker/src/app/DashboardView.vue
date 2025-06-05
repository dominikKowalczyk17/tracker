<template>
  <LayoutBox>
    <template #sidebar>
      <AppSidebar />
    </template>
    <template #header>
      <DashboardHeader />
    </template>
    <Tabs v-model="activeTab">
      <TabsList>
        <TabsTrigger value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger value="sports">
          Sports Hub
        </TabsTrigger>
        <TabsTrigger value="investments">
          Investments
        </TabsTrigger>
        <TabsTrigger value="social">
          Social
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <DashboardOverview />
      </TabsContent>
      <TabsContent value="sports">
        <RemoteSportsApp />
      </TabsContent>
      <TabsContent value="investments">
        <RemoteInvestmentsApp />
      </TabsContent>
      <TabsContent value="social">
        <DashboardSocial />
      </TabsContent>
    </Tabs>
  </LayoutBox>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { DashboardHeader, LayoutBox, AppSidebar, DashboardOverview, DashboardSocial } from '@tracker-app/shared/ui';

const RemoteSportsApp = defineAsyncComponent(
  () => import('sports-app/RemoteSportsApp')
);
const RemoteInvestmentsApp = defineAsyncComponent(
  () => import('investments-app/RemoteInvestmentsApp')
);

const activeTab = ref('overview');
</script>
