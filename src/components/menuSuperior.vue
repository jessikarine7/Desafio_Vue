<template>
<div class="d-flex justify-start menu">
  <div class="d-flex flex-row align-start" style="width: 48%">
    <v-select
      label="Consulta por Chassi"
      :items="itemsChassi"
      prepend-inner-icon="mdi-magnify"
      solo
      class="input"
      hide-details
      color="#8C8C8C"
      dense
      style="width: 15%; border-right: solid 2px #d3d3d388"
      clearable
    ></v-select>
    
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      label="Pesquisar por Código ou Nome"
      style="width: 25%"
      color="#8C8C8C"
      solo
      class="input"
      hide-details
      dense
      clearable
    ></v-text-field>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  itemsChassi = [
    'chassi 1', 'chassi 2'
  ];
}
</script>

<style scoped>
/* .input .v-application .primary--text{
  color: none !important;
  caret-color: none !important;
} */
.input >>>  .v-input__control > .v-input__slot{
  box-shadow: 0px 0px 0px 0px !important;
  border-radius: 0px !important;
}
.v-menu__content{
  margin-top: 26px !important;
}
.v-list {
  padding: 0px !important; 
}
.menu{
  width: 100%; 
  height: 40px; 
  z-index: 99;
  border-bottom: solid 2px #d3d3d388;
}
</style>