<template>
  <div class="dynCss">test1</div>
</template>

<script setup lang="ts" name=Test1>
import {ref} from "vue";

const fontColor = ref('red')
</script>

<style scoped lang="scss">
.dynCss {
  color: v-bind(fontColor);   // 使用v-bind
}
</style>