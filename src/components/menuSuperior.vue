<template>
<div class="white elevation-1 d-flex justify-start" style="width: 100%; height: 49px; z-index: 99">
  <div class="d-flex flex-row align-start" style="width: 55%">
      <v-select
        label="Consulta por Chassi"
        prepend-inner-icon="mdi-magnify"
        solo
        style="width: 25%"
      ></v-select>

      <v-text-field
        prepend-inner-icon="mdi-magnify"
        label="Pesquisar por Código ou Nome"
        style="width: 25%"
        solo
      ></v-text-field>

  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
    
}
</script>

<style scoped>

</style>