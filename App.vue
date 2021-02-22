<template>
  <div class="center">
    <HelloWorld msg="Welcome to Electron+Vue3 App"/>
  </div>
</template>

<script>
import HelloWorld from './src/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
.center {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>