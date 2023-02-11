<template>
   <v-app class="white d-flex flex-grow-1 flex-row">
    <div class="white d-flex flex-grow-1 flex-row">
      <menuLateral/>
      <menuSuperior/>
      <usuariosAgrale/>
    </div>
  </v-app>
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
</style>
