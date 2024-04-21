<script setup lang="ts">
import { ref } from 'vue'
import { useRouter} from "vue-router";

const router = useRouter()
const goMap = () => {
  router.push({name: 'test5'})
}
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <button type="button" @click="goMap">go map
  </button>
  <router-view/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
