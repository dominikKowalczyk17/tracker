import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { federation } from '@module-federation/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/apps/sports-app',
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  cacheDir: '../../node_modules/.vite/apps/sports-app',
  server: {
    port: 4201,
    cors: true,
  },
  plugins: [
    vue(),
    nxViteTsPaths(),
    federation({
      name: 'sportsApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteSportsApp': './src/app/RemoteSportsApp.vue',
        './router': './src/router/index.ts',
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
