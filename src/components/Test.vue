<script setup lang="ts" name="Test">
import {getCurrentInstance} from "vue";

const app = getCurrentInstance()
console.log(app?.proxy?.$env);
</script>

<template>
 <div class="w-screen bg-red-500 text-6xl text-slate-300">{{$env}}</div>
  <el-button t>test</el-button>
</template>

<style scoped>

</style>