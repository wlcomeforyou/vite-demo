<template>
  <div class="w-screen bg-red-500 text-2xl text-slate-300 test-text">{{$env}}</div>
</template>

<script setup lang="ts" name="Test">
import {getCurrentInstance} from "vue";

const app = getCurrentInstance()
console.log(app?.proxy?.$env);
</script>

<style scoped>
.test-text {
  font-size: var(--custFontSize);
}
</style>