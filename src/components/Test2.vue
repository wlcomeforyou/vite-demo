<template>
  <div :class="[$style.dynCss,$style.border]">test1</div>
</template>

<script setup lang="ts" name=Test1>

</script>

<style module>
.dynCss {
  color: red;
}
.border {
  border: 1px solid #000;
}
</style>