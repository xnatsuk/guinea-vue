import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': 'src/',
    },
  },
  plugins: [vue(), AutoImport({
    dts: true,
    imports: [
      'vue',
      'vitest',
    ],
    exclude: [
      '**/dist/**',
    ],
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    dts: 'src/components.d.ts',
    resolvers: [ElementPlusResolver()],
  })],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
