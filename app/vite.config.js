import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve('src')}/`,
    },
  },
  plugins: [
    vue(),
    Unocss(),
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
      resolvers: [NaiveUiResolver()],
    })],

  test: {
    globals: true,
    environment: 'jsdom',
  },
})
