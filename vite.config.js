import { fileURLToPath, URL } from 'node:url'

import { defineConfig,splitVendorChunkPlugin  } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    vue(), 
    vueJsx(), 
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest:{
        name: "Your PWA Name",
        short_name: "PWA",
        description: "Thesis file",
        theme_color: "#4caf50",
        // start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            "src": "fire-icon-144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "any"
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        cleanupOutdatedCaches: true
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  
  // (!) Some chunks are larger than 500 kBs after minification. Consider
  // to resolve look at this::
  // https://vitejs.dev/guide/build  
  build: {
    chunkSizeWarningLimit: 3000,
    // rollupOptions: {
    //     output:{
    //         manualChunks(id) {
    //             if (id.includes('node_modules')) {
    //                 return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //             }
    //         }
    //     },
    // }
  }
  ,
})
