<template>
  <div class="d-flex flex-grow-1 flex-row" style="width: 100%; height: 100%;position: absolute; z-index: 1">
  
    <div class="d-flex flex-grow-1">
      <h1>Olá, Mundo</h1>
    </div>
   
    <!-- <v-data-table
      :headers="headers"
      class="elevation-1"
    ></v-data-table> -->
  
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
    
}
</script>