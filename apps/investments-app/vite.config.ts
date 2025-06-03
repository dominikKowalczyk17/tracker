import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { federation } from '@module-federation/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/apps/investments-app',
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  cacheDir: '../../node_modules/.vite/apps/investments-app',
  server: {
    port: 4202,
    cors: true,
  },
  plugins: [
    vue(),
    nxViteTsPaths(),
    federation({
      name: 'investmentsApp',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
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
