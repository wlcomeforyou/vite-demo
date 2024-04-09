import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let app = createApp(App);
// 定义全局变量
app.config.globalProperties.$env = 'dev'
// 声明变量类型
declare module 'vue' {
  export interface ComponentCustomProperties {
    $env: string
  }
}
app.mount('#app')
