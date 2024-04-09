<template>
  <div class="pdc-test">
    hello world
    <div class="pdc-test__inner">el</div>
    <div class="pdc-test--success">m</div>
    <Test/>
  </div>
</template>

<script setup lang="ts">
import Test from "./components/Test.vue";
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
</style>
