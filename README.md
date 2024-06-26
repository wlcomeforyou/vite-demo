# Vue 3 + TypeScript + Vite

## IDE选择
- VSCODE
  + 插件安装**volar**插件
- WEBSTORM
  + 设置-> 语言与框架 -> TypeScript -> 选择 Vue Language Service

## 项目构建
- npm init vite@latest 
  + vite构建 构建出来的项目比较精简，可以适配多种前端框架比如、vue、react等
- npm init vue@latest
  + vue3脚手架构建 构建出来的项目比较完整，专门为vue3项目打造的

## 项目开发约定以及规范
1. 样式架构

    采用***BEM***框架, B: block(块), E: element(元素), M: modifier(修饰)，通常还会有命名空间限定,命名空间与块之间使用 ***-*** 连接，块与元素之间使用 ***__*** 连接，修饰与元素之间使用 ***--*** 连接。
   + 例：el-input__wrapper， el是命名空间限定，input是块，wrapper是元素，所以最终的样式类名是el-input__wrapper。
   + 例: el-button--success，el是命名空间限定，button是块，success是修饰，所以最终的样式类名是el-button--success。

    css样式框架有很多, 如sass、less、stylus等，可以根据情况自由选择。
    + [Sass中文网](https://www.sass.hk/docs/)
    + [Less中文网](https://lesscss.cn/usage/)

    这里以Sass为例,演示集成Sass的流程
    
    ```npm install -D sass```
    在资源目录下创建main.scss文件，并定义全局变量
    ```scss
    $namespace: 'pdc' !default;
    $block-sel: '-' !default;
    $element-sel: '__' !default;
    $modifier-sel: '--' !default;
    
    @mixin b($block){
      $B: #{$namespace + $block-sel + $block};
      .#{$B} {
        @content;
      }
    }
    @mixin e($el){
      $Parent: &;
      @at-root {
        #{$Parent + $element-sel + $el} {
          @content;
        }
      }
    }
    
    @mixin M($m){
      $Parent: &;
      @at-root {
        #{$Parent + $modifier-sel + $m} {
          @content;
        }
      }
    }
    ```
    全局配置scss,在vite.config.ts中配置css预处理器
    ~~~ts
    export default defineConfig({
      plugins: [vue()],
      // scss全局样式预处理器
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "./src/assets/main.scss";`
          }
        }
      }
    })    
    ~~~
    vue中使用
    ~~~vue
    <template>
      <div class="pdc-test">
        hello world
        <div class="pdc-test__inner">el</div>
        <div class="pdc-test--success">m</div>
      </div>
    </template>
    <style lang="scss">
      @include b(test) {
        color: red;
        @include e(inner) {
          color: blue;
        }
        @include m(success) {
          color: green;
        }
      }
    </style>
    ~~~

2. ELEMENT-PLUS UI组件库

   ```npm install element-plus --save```安装

   在main.ts中引入组件库
    ~~~ts
    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'
    
    app.use(ElementPlus)
    ~~~
   
3. 使用TailWindCSS

   安装依赖`npm install -D tailwindcss postcss autoprefixer`

   初始化`npx tailwindcss init -p`,生成`tailwind.config.js`和`postcss.config.js files`

   配置模板路径（tailwind.config.js）
   
4. 使用ECharts
   
   安装依赖`npm install echarts -s`

   引入, 如果是echarts4版本 `import echarts from 'echarts'`, 如果是echarts5版本 `import * as echarts from 'echarts'`。

   还需要引入对应地图文件。

5. 使用Router
   
   安装依赖`npm install vue-router -S`

   新建路由文件,并在main.ts使用注册。


6. 

## 常见问题&解决方法
1. ***Q***: 控制台打印ref、reactive等对象时，控制台会显示[object Object]

   ***A***: F12 打开控制台，点击设置，勾选自定义格式设置工具 
2. ***Q***: Vue组件自定义name

   ***A***: 通过安装插件解决

    ~~~text
    // 安装插件
    npm install unplugin-vue-define-options
    // 在vite.config.ts 引入插件
    import DefineOptions from 'unplugin-vue-define-options/vite'
    ......
    export default defineConfig({
      plugins: [
        vue(),
        DefineOptions()
      ],
      ......
    })
    ~~~
3. ***Q***: 全局变量的定义

   ***A***: main.ts中挂载变量,在vue中使用
   
    ~~~ts
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
    ~~~
    ~~~vue
    <template>
      <div>{{$env}}</div>
    </template>
    <script setup lang="ts" name="Test">
      import {getCurrentInstance} from "vue";
    
      const app = getCurrentInstance()
      console.log(app?.proxy?.$env);
    </script>
    ~~~
4. ***Q***: vue3中样式新特性

   ***A***:

   1. vue2中使用 `/deep/`进行样式穿透，vue3中也可以使用，但是会提示警告，vue3中使用 `:deep(css类名)`
   2. vue3中使用`:slotted(css类名)`设置插槽里面的样式
   3. vue3中使用`:global(css类名)`设置全局的样式
   4. vue3中使用`v-bind(变量)`支持新的动态css
      ~~~vue
      <template>
          <div class="dynCss">test1</div>
      </template>

      <script setup lang="ts" name=Test1>
      import {ref} from "vue";

      const fontColor = ref('red')
      </script>

      <style scoped lang="scss">
      .dynCss {
         color: v-bind('fontColor');   // 使用v-bind
      }
      </style>
      ~~~
      
   5. vue3中支持使用样式模块
      ~~~vue
      <template>
        <div :class="[$style.dynCss,$style.border]">test1</div>
      </template>
      
      <script setup lang="ts" name=Test1>
      
      </script>
      
      <style module>
      .dynCss {
        color: red;
      }
      .border {
        border: 1px solid #000;
      }
      </style>
      ~~~
   
5. ***Q***: vue3中使用PostCss插件实现自适应适配、全局字体大小、主题切换

   ***A***:
   + 自适应适配
     + 新建插件文件 `scr/plugins/postcss-px-to-viewport.ts`
     
     ~~~ts
    
     // vite 内置了postCss 无需再安装
     import {Plugin} from 'postcss'
     export const postcssPxToViewport = ():Plugin => {
       // 高保约定：设计稿宽度的
       const viewportWidth = 1920
       return {
          postcssPlugin: "postcss-px-to-viewport",
          Declaration(node) {
            // 拦截需要适配转换的css
            // 例如：width: 100vx vx为需要转换的标志
            if (node.value.includes('vx')) {
               let value = parseFloat(node.value);
               // 根据设计稿宽度换算成vw数据
               node.value = `${(value/viewportWidth*100).toFixed(2)}vw`;
            }
          }
      }
     }     
         
     ~~~      

     + 注册插件
       
     ~~~ts
     // vite.config.ts
     import {postcssPxToViewport} from '@/plugins/postcss-px-to-viewport'

     css: {
        postcss: {
           plugins: [postcssPxToViewport()]
        }
     }
     ~~~
         
     
   + 全局字体大小切换

     安装vueUse依赖，通过设置全局的css的变量，更改全局字体颜色变量达到效果
     ~~~css
     :root{
        --custFontSize: 14px;
     }
     .xxx{
        font-size: var(--custFontSize);
     }
     ~~~
     ~~~vue
     import {useCssVar} from '@vueuse/core'
     const size = useCssVar('--custFontSize')
     ~~~
   + 主题切换
     与全局字体大小切换原理一直。

6. 大师
7. 
 