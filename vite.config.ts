import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import {postcssPxToViewport} from './src/plugins/postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend()
  ],
  // scss全局样式预处理器
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/main.scss";`
      }
    },
    postcss: {
      plugins: [postcssPxToViewport()]
    }
  }
})
