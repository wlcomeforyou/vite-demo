<template>
  <div class="pdc-test">
    hello world
    <div class="pdc-test__inner">el</div>
    <div class="pdc-test--success">m</div>
  </div>
</template>

<script setup lang="ts">
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
