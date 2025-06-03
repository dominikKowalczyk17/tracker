import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { federation } from '@module-federation/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/apps/tracker',
    target: 'esnext',
  },
  cacheDir: '../../node_modules/.vite/apps/tracker',
  server: {
    port: 4200,
    cors: true,
  },
  plugins: [
    vue(),
    nxViteTsPaths(),
    federation({
      name: 'tracker',
      remotes: {
        sportsApp: {
          type: 'module',
          name: 'sportsApp',
          entry: 'http://localhost:4201/remoteEntry.js',
          entryGlobalName: 'sportsApp',
          shareScope: 'default',
        },
        investmentsApp: {
          type: 'module',
          name: 'investmentsApp',
          entry: 'http://localhost:4202/remoteEntry.js',
          entryGlobalName: 'investmentsApp',
          shareScope: 'default',
        },
      },
      shared: {
        vue: {
          singleton: true,
        },
        'vue-router': {
          singleton: true,
        },
      },
    }),
  ],
});
