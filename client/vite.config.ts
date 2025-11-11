import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import { fileURLToPath, URL } from "node:url";
import Components from 'unplugin-vue-components/vite'

import VueIconsResolver from '@kalimahapps/vue-icons/resolver';
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import",'global-builtin','color-functions','abs-percent','function-units'],
      },
    },
},
  server: {
    host: "localhost",
    strictPort: true,
    port: 5173,
    hmr: {
      host:"dev.awesum.app",
      port: 5173,
      clientPort: 5174,
      protocol: "wss",
    },
  },
  plugins: [vue(), Components({
    dts: true, // enabled by default if `typescript` is installed
    resolvers: [
      VueIconsResolver,
    ],
  }),VitePWA({
    selfDestroying:true,
    registerType: 'autoUpdate',
    injectRegister: 'auto',

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Awesum',
      short_name: 'Awesum',
      description: 'Awesum',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico,gif}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      navigateFallbackAllowlist: [/\/i\//],
      navigateFallbackDenylist: [/\/api\//],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  build: {
    target: "esnext",
  },
})