<template>
  <div id="app" class="white d-flex flex-grow-1 flex-row">
    <menuLateral/>
    <menuSuperior/>
    <usuariosAgrale/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import usuariosAgrale from './views/usuarios/usuariosAgrale.vue';
import menuLateral from './components/menuLateral.vue';
import menuSuperior from './components/menuSuperior.vue';

@Component({
  components: {
    usuariosAgrale,
    menuLateral,
    menuSuperior,
  },
})
export default class App extends Vue {}
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
