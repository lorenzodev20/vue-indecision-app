<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- Cuando se envian parametros al componente se recomienda escribir en formato: name-component -->
  <!-- <Counter v-bind:start="3"/> -->
  <!-- <Counter :start="1"/> -->
  <Indecision></Indecision>

</template>

<script>
import Counter from './components/Counter.vue'
import Indecision from "./components/Indecision.vue";

export default {
  name: 'App',
  components: {
    Counter,
    Indecision,
  }
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
</style>
