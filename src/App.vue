<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>test</h1>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <svg
      id="game"
      class="display"
      width="600"
      height="500"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    ></svg
    >
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.display {
    border: 1px solid red;
}
</style>
