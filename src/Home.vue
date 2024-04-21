<template>
  <div class="pdc-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="BEM样式规范" name="1">
        <div class="pdc-test">
          hello world
          <div class="pdc-test__inner">el</div>
          <div class="pdc-test--success">m</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="TailWind CSS样例" name="2">
        <Test/>
        <Test1/>
        <Test2/>
      </el-collapse-item>
      <el-collapse-item title="PostCss插件 适配多分辨率" name="3">
        <Test3/>
      </el-collapse-item>
      <el-collapse-item title="更改全局文本字体大小" name="4">
        <Test4/>
      </el-collapse-item>
      <el-collapse-item title="echarts-地图" name="5">
        <Test5/>
      </el-collapse-item>
    </el-collapse>
  </div>



</template>

<script setup lang="ts" name="Home">
import Test from "./components/Test.vue";
import {ref} from "vue";
import Test1 from "./components/Test1.vue";
import Test2 from "./components/Test2.vue";
import Test3 from "./components/Test3.vue";
import Test4 from "./components/Test4.vue";
import Test5 from "./components/Test5.vue";
const activeName = ref('1')
</script>

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
@include b(collapse) {
  width: calc( 100vw - 20px );
}
</style>
