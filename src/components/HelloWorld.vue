<template>
  <div class="hello-world">
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

.hello-world{
  position: absolute;
  top:50%;
  left:50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
}
</style>