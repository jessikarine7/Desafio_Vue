<template>
  <v-app>
    <div class="d-flex align-start flex-grow-1">
      <menuLateral/>
      <div class="white d-flex flex-grow-1 flex-row flex-wrap">
        <menuSuperior/>
        <usuariosAgrale/>
      </div>
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

export default class App extends Vue {
  name: 'app'
}

</script>

<style>
</style>
