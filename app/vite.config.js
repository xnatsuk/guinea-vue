import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': 'src/',
    },
  },
  plugins: [
    vue(),

    AutoImport({
      dts: true,
      imports: [
        'vue',
        '@vueuse/head',
        '@vueuse/core',
        'vitest',
        'vue-router',
      ],
      dirs: [
        'src/composables',
        'src/components',
        'src/store',
        'src/views',
        'src/router',
      ],
      exclude: [
        '**/dist/**',
      ],
      vueTemplate: true,
    }),
    Components({
      dts: true,
    })],

  test: {
    globals: true,
    environment: 'jsdom',
  },
})
