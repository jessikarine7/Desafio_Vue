<template>
<div class="d-flex justify-space-between align-center flex-column menu">
  <div>
    <div text class="d-flex align-center flex-column pa-2 mt-3">
      <v-icon style="font-size: 25px" color="#4D4D4D">mdi-home</v-icon>
      <span class="font">Home</span>
    </div>

    <div class="mt-4 d-flex align-center flex-column pa-2">
      <v-icon style="font-size: 25px" color="#4D4D4D">mdi-account-hard-hat</v-icon>
      <span class="font">Assistência</span>
      <span class="font">Técnica</span>
    </div>

    <div class="mt-4 d-flex align-center flex-column pa-2">
      <v-btn  color="#971E27" class="mb-1" style="border-radius: 10px">
        <v-icon style="font-size: 23px" color="white">mdi-cogs</v-icon>
      </v-btn>
      <span class="font">Administração</span>
    </div>
  </div>

  <v-btn fab class="mb-6 d-flex align-center"  color="#971E27">
    <span style="color: white; font-size: 18px">IN</span>
  </v-btn>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {}
</script>

<style scoped>
.v-btn--fab.v-size--default {
  height: 30px !important; 
  width: 30px !important;
}
.font{
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
} 
.menu{
  width: 90px; 
  height: 100%; 
  z-index: 99; 
  border-right: solid 2px #d3d3d388
}
</style>