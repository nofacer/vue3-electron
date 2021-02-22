<template>
  <div class="hello-world">
    <img src="@/img/vue_logo.png" alt="">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
$nav-color: #F90;
h1 {
  color: $nav-color;
}

.hello-world {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
}
</style>