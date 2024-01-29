import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import { UnpluginVueComponentsResolver } from 'maz-ui/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dts: true,
      resolvers: [UnpluginVueComponentsResolver()],
    })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
