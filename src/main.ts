import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/tailwind.css'

let app = createApp(App);
app.use(ElementPlus)
// 定义全局变量
app.config.globalProperties.$env = 'dev'
// 声明变量类型
declare module 'vue' {
  export interface ComponentCustomProperties {
    $env: string
  }
}
app.mount('#app')
