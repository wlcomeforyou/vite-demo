<template>

  <router-link to="/">hello</router-link>
  <router-link :to="{name: 'home'}">home</router-link>
  <button @click="toTest('/Test')">test</button>
  <button @click="toTest('test1')">test1</button>
  <router-view/>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const toTest = (url: string) => {
  if (url.startsWith('/')) {
    router.push(url)
  }else {
    router.push({name: url})
  }
}
</script>

<style lang="scss">

</style>
