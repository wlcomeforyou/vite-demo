<script setup lang="ts" name="Test">
import {getCurrentInstance} from "vue";

const app = getCurrentInstance()
console.log(app?.proxy?.$env);
</script>

<template>
 <div>{{$env}}</div>
</template>

<style scoped>

</style>