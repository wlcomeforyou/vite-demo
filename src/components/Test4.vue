<template>
<div  class="w-screen bg-red-500 text-2xl text-slate-300">
  <span class="test-text">这是一段文本</span>

  <div>
    <el-button @click="changeFontSize(12)">小</el-button>
    <el-button @click="changeFontSize(24)">中</el-button>
    <el-button @click="changeFontSize(36)">大</el-button>
  </div>
  <h3>下面是子组件</h3>
  <Test/>
</div>
</template>

<script setup lang="ts" name=Test4>
import Test from "./Test.vue";
import {useCssVar} from "@vueuse/core";

const changeFontSize = (fontSize: number) => {
  let size = useCssVar('--custFontSize');
  size.value = fontSize + 'px'
}
</script>

<style scoped lang="scss">
:root{
  --custFontSize: 12px
}
.test-text {
  font-size: var(--custFontSize);
}
</style>