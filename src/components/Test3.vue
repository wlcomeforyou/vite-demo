<template>
  <div>
    <header class="header">
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </header>
  </div>
</template>

<script setup lang="ts" name=Test3>

</script>

<style scoped lang="scss">
.header {
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: flex;

  div:nth-child(1) {
    width: 200vx;
    background-color: blue;
  }

  div:nth-child(2) {
    flex: 1;
    background-color: red;
  }

  div:nth-child(3) {
    width: 200vx;
    background-color: green;
  }
}
</style>